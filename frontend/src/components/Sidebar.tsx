import { NavLink } from "react-router-dom";

const menuItems = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Music Library", path: "/music-library" },
    { label: "Smart Crates", path: "/smart-crates" },
    { label: "Playlist Builder", path: "/playlist-builder" },
    { label: "Discovery", path: "/discovery" },
    { label: "Knowledge Base", path: "/knowledge-base" },
    { label: "Settings", path: "/settings" },
];

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <h1 className="logo">🎧 DJ Brain</h1>

            <nav>
                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            isActive ? "nav-item active" : "nav-item"
                        }
                    >
                        {item.label}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
}