import UserSearch from "./UserSearch";

export default function App() {
  return (
    <main className="page">
      <header>
        <p className="eyebrow">Acme People</p>
        <h1>Directory</h1>
      </header>
      <UserSearch />
    </main>
  );
}
