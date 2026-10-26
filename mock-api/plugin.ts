import type { Connect, Plugin } from "vite";
import { searchUsers } from "./users";

// Broad (short) queries are slower, the way they are against a real directory service.
const latencyFor = (q: string) => Math.max(120, 2000 - q.length * 450) + Math.round(Math.random() * 120);

export function mockApi({ serverErrors }: { serverErrors: boolean }): Plugin {
  const handler: Connect.NextHandleFunction = (req, res, next) => {
    const url = new URL(req.url ?? "/", "http://localhost");
    if (req.method !== "GET" || url.pathname !== "/api/users") return next();

    const q = url.searchParams.get("q") ?? "";
    setTimeout(() => {
      if (serverErrors) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/html");
        res.end("<html><body><h1>Internal Server Error</h1></body></html>");
        return;
      }
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(searchUsers(q)));
    }, latencyFor(q));
  };

  return {
    name: "mock-users-api",
    configureServer(server) {
      server.middlewares.use(handler);
    },
    configurePreviewServer(server) {
      server.middlewares.use(handler);
    },
  };
}
