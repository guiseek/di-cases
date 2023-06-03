import { FetchHttpImpl, Http } from '@di-cases/shared/data-access';
import { ProductsImpl } from './pages/products.impl';
import { RouterImpl } from './pages/router.impl';
import { HomeImpl } from './pages/home.impl';
import { register } from '@sqnl/di';
import { RoutePath } from './types';
import { path } from './utilities';

export function Home() {
  return <></>;
}
export function Products() {
  return <></>;
}
export function Router() {
  return <></>;
}

register(
  {
    for: Http,
    use: FetchHttpImpl,
  },
  {
    for: Home,
    use: () => {
      return [path(), HomeImpl()];
    },
  },
  {
    for: Products,
    use: (http: Http) => {
      return [path('products'), ProductsImpl(http)];
    },
    add: [Http],
  },
  {
    for: Router,
    use: (...routes: RoutePath[]) => {
      return RouterImpl(...routes);
    },
    add: [Home, Products],
  }
);
