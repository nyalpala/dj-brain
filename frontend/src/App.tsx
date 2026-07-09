import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";
import MusicLibrary from "./pages/MusicLibrary";
import SmartCrates from "./pages/SmartCrates";
import PlaylistBuilder from "./pages/PlaylistBuilder";
import Discovery from "./pages/Discovery";
import KnowledgeBase from "./pages/KnowledgeBase";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/library" element={<MusicLibrary />} />
        <Route path="/crates" element={<SmartCrates />} />
        <Route path="/playlists" element={<PlaylistBuilder />} />
        <Route path="/discovery" element={<Discovery />} />
        <Route path="/knowledge" element={<KnowledgeBase />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}