import { Route, Routes } from 'react-router-dom';
import { Home, Products } from '../app.providers';

export function RouterImpl(
  HomePage: typeof Home,
  ProductsPage: typeof Products
) {
  return () => (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <h1>Home</h1>
            <HomePage />
          </div>
        }
      />
      <Route
        path="/products"
        element={
          <div>
            <h1>Products</h1>
            <ProductsPage />
          </div>
        }
      />
    </Routes>
  );
}
