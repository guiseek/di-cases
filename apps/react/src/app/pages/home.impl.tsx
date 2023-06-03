import { Link } from 'react-router-dom';

export function HomeImpl() {
  return () => (
    <div>
      This is the generated root route.{' '}
      <Link to="/products">Click here for products.</Link>
    </div>
  );
}
