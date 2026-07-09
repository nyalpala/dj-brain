import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h1>🎧 DJ Brain</h1>

      <nav>
        <NavLink to="/">Dashboard</NavLink>

        <NavLink to="/library">Music Library</NavLink>

        <NavLink to="/crates">Smart Crates</NavLink>

        <NavLink to="/playlists">Playlist Builder</NavLink>

        <NavLink to="/discovery">Discovery</NavLink>

        <NavLink to="/knowledge">Knowledge Base</NavLink>

        <NavLink to="/settings">Settings</NavLink>
      </nav>
    </aside>
  );
}