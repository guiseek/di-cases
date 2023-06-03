import { FetchHttpImpl, Http } from '@di-cases/shared/data-access';
import { ProductsImpl } from './pages/products.impl';
import { RouterImpl } from './pages/router.impl';
import { HomeImpl } from './pages/home.impl';
import { register } from '@sqnl/di';

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
    use: () => HomeImpl(),
  },
  {
    for: Products,
    use: (http: Http) => ProductsImpl(http),
    add: [Http],
  },
  {
    for: Router,
    use: (home: typeof Home, products: typeof Products) => {
      return RouterImpl(home, products);
    },
    add: [Home, Products],
  }
);