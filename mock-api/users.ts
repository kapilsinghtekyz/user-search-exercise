export interface User {
  id: string;
  name: string;
  team: string;
}

export const USERS: User[] = [
  ["u101", "Alan Turner", "Platform"],
  ["u102", "Albert Kim", "Finance"],
  ["u103", "Alex Morgan", "Design"],
  ["u104", "Ali Hassan", "R&D"],
  ["u105", "Alice Walker", "Sales & Ops"],
  ["u106", "Alicia Gomez", "Support"],
  ["u107", "Alina Petrova", "R&D"],
  ["u108", "Allen Brooks", "Platform"],
  ["u109", "Alma Ortiz", "Design"],
  ["u110", "Ben Carter", "Finance"],
  ["u111", "Bianca Rossi", "Sales & Ops"],
  ["u112", "Carla Mendes", "Support"],
  ["u113", "Chen Wei", "R&D"],
  ["u114", "Dana Levi", "Platform"],
  ["u115", "Diego Alvarez", "Sales & Ops"],
  ["u116", "Elena Novak", "Design"],
  ["u117", "Farah Khan", "Finance"],
  ["u118", "Grace Liu", "R&D"],
  ["u119", "Hiro Tanaka", "Platform"],
  ["u120", "Isabel Duarte", "Support"],
  ["u121", "Jonas Weber", "R&D"],
  ["u122", "Maya Patel", "Design"],
  ["u123", "Natalia Cruz", "Sales & Ops"],
  ["u124", "Omar Haddad", "Platform"],
  ["u125", "Priya Shah", "Finance"],
  ["u126", "Ravi Menon", "R&D"],
  ["u127", "Sofia Berg", "Support"],
  ["u128", "Tom Fischer", "Design"],
].map(([id, name, team]) => ({ id, name, team }));

export function searchUsers(q: string): User[] {
  const needle = q.trim().toLowerCase();
  if (!needle) return [];
  return USERS.filter(
    (u) => u.name.toLowerCase().includes(needle) || u.team.toLowerCase().includes(needle),
  ).sort((a, b) => a.name.localeCompare(b.name));
}
