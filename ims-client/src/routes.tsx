import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import IncidentsPage from './pages/incidents/incident';
import Timeline from './pages/timeLine/timeLine';
import {withId} from './HOC'
export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/incident" element={<IncidentsPage />} />
            {/* <Route path="/timeline" element={withId()} /> */}
            <Route path="/" element={<Navigate to="/incident" />} />
            <Route path="*" element={<h1>404 Page not found 🤔</h1>} />
        </Routes>
    </BrowserRouter>
  );
}