
import { Routes as RouterRoutes, Route } from 'react-router-dom';

// Import your pages
import HomePage from './pages/HomePage';


export function Routes() {
  return (
    <RouterRoutes>
      {/* Public routes */}
      <Route path="/" element={<HomePage />} />
      {/* Protected routes */}
    </RouterRoutes>
  );
}
