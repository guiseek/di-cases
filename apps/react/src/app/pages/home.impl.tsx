import { Link } from 'react-router-dom';
import { path } from '../utilities';

export function HomeImpl() {
  return () => (
    <div>
      <h1>Home</h1>
      This is the generated root route.{' '}
      <Link to={path('products')}>Click here for products.</Link>
    </div>
  );
}
