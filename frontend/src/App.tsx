import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";
import MusicLibrary from "./pages/MusicLibrary";
import SmartCrates from "./pages/SmartCrates";
import PlaylistBuilder from "./pages/PlaylistBuilder";
import Discovery from "./pages/Discovery";
import KnowledgeBase from "./pages/KnowledgeBase";
import Settings from "./pages/Settings";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Navigate to="/dashboard" replace />} />

                <Route path="dashboard" element={<Dashboard />} />
                <Route path="music-library" element={<MusicLibrary />} />
                <Route path="smart-crates" element={<SmartCrates />} />
                <Route path="playlist-builder" element={<PlaylistBuilder />} />
                <Route path="discovery" element={<Discovery />} />
                <Route path="knowledge-base" element={<KnowledgeBase />} />
                <Route path="settings" element={<Settings />} />
            </Route>
        </Routes>
    );
}

export default App;