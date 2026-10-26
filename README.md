# User Search: senior React exercise

Thanks for taking the time to do this. It should take about **60–90 minutes**. Please don't spend more than two hours on it.

## The ticket

> **PEOPLE-482: User Search is unreliable in production**
>
> The user search in our people directory ships to production and "works", but users report:
>
> 1. Results sometimes match something they typed **earlier**, not what is in the box now.
> 2. Clicking the ☆ star does nothing until they type another letter. Then it suddenly shows.
> 3. A user wrote a note next to one person, searched again, and the note was now next to **someone else**.
> 4. The network tab shows a request on **every keystroke**, even though we "added debounce".

The component is [`src/UserSearch.tsx`](src/UserSearch.tsx). Fix it the way you would on a real team: find the root causes, not just the symptoms. You may restructure it however you like.

## What we're looking for

- Every reported bug fixed at its root cause.
- Anything else you find wrong with the component. The ticket is not the full list.
- Tests that prove your fixes (Vitest + React Testing Library are already set up).
- Clear commits. We read the history, so commit as you would on a team rather than in one squashed commit.
- A short write-up in [`NOTES.md`](NOTES.md): what was wrong, why it happened, and how you fixed it.

## Getting started

Requires Node 20 or newer.

```bash
npm install
npm run dev
```

Open the URL Vite prints and type in the search box. Keep your browser's Network tab open.

| Command | What it does |
| --- | --- |
| `npm run dev` | Runs the app with the mock API |
| `npm run dev:errors` | Same, but every API request fails with a 500 |
| `npm test` | Runs the tests once |
| `npm run test:watch` | Runs the tests in watch mode |
| `npm run lint` | ESLint, including the React hooks rules |
| `npm run typecheck` | TypeScript |

### The API

`GET /api/users?q=<text>` returns the users whose name or team contains `<text>`, as a JSON array of `{ id, name, team }`. It is a mock served by Vite (see [`mock-api/`](mock-api)) with realistic, variable latency. Treat it like a third-party service: please don't change it.

### Constraints

- Keep `src/App.tsx` as the root component, and keep it rendering the search.
- Keep the search box placeholder `Search users` and the note inputs' placeholder `Add a note`. We run our own automated checks against your solution and they look for these.
- You may add libraries if you can explain why. Fixing the component without them is fine too.

## How to submit

Please **don't fork this repository or open a pull request against it**. Forks of a public repository are public, and other candidates would see your solution.

**Option A: private GitHub repository (preferred)**

1. On this repository's GitHub page, click **Use this template → Create a new repository**.
2. Set the visibility to **Private** and create it under your own account.
3. Clone it, do your work, and push your commits.
4. Under **Settings → Collaborators**, add **`<interviewer-github-username>`** with read access.
5. Reply to our email with the link to your repository.

**Option B: no GitHub account**

Clone this repository, do your work in commits, then create a bundle that contains your full history:

```bash
git bundle create user-search-<your-name>.bundle --all
```

Email us the `.bundle` file.

Good luck, and have fun with it.
