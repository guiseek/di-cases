import { Route, Routes } from 'react-router-dom';
import { RoutePath } from '../types';

export function RouterImpl(...routes: RoutePath[]) {
  return () => (
    <Routes>
      {routes.map(([path, Element], key) => {
        return <Route key={key} path={path} element={<Element />} />;
      })}
    </Routes>
  );
}
