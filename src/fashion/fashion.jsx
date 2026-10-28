
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import FashionHome from "./fashionHome";
import Runway from "./runway";
import StreetStyle from "./treetstyle";
import Trends from "./trends";
import EditorsPicks from "./editorspicks";

const Fashion = () => {
  return (
    <Routes>
      <Route index element={<FashionHome />} />
      <Route path="runway" element={<Runway />} />
      <Route path="street-style" element={<StreetStyle />} />
      <Route path="trends" element={<Trends />} />
      <Route path="editors-picks" element={<EditorsPicks />} />

      <Route path="*" element={<Navigate to="/fashion" replace />} />
    </Routes>
  );
};

export default Fashion;
