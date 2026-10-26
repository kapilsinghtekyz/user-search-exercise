import { useState, useEffect, useCallback } from "react";
import type { User } from "../mock-api/users";

function debounce<A extends unknown[]>(fn: (...args: A) => void, ms: number) {
  let t: ReturnType<typeof setTimeout>;
  return (...args: A) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
}

export default function UserSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<User[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const search = useCallback(
    debounce(async (q: string) => {
      setLoading(true);
      const res = await fetch(`/api/users?q=${q}`);
      setResults(await res.json());
      setLoading(false);
    }, 300),
    [query],
  );

  useEffect(() => {
    if (query) search(query);
  }, [query]);

  const toggleFavorite = (id: string) => {
    const i = favorites.indexOf(id);
    if (i === -1) favorites.push(id);
    else favorites.splice(i, 1);
    setFavorites(favorites);
  };

  return (
    <div className="user-search">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search users"
      />
      {loading && <p>Loading…</p>}
      <ul>
        {results.map((user, index) => (
          <li key={index}>
            <button onClick={() => toggleFavorite(user.id)}>
              {favorites.includes(user.id) ? "★" : "☆"}
            </button>
            <span>{user.name}</span>
            <small>{user.team}</small>
            <input placeholder="Add a note" />
          </li>
        ))}
      </ul>
    </div>
  );
}
