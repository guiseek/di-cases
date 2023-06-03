import { Link } from 'react-router-dom';

export function HomeImpl() {
  return () => (
    <div>
      <h1>Home</h1>
      This is the generated root route.{' '}
      <Link to="/products">Click here for products.</Link>
    </div>
  );
}
