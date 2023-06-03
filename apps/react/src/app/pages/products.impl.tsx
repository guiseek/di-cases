import { Http } from '@di-cases/shared/data-access';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { path } from '../utilities';

export interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export function ProductsImpl(http: Http) {
  return () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
      const url = `https://dummyjson.com/products`;
      const req = http.get<ProductResponse>(url, { limit: 10, skip: 0 });
      req.then(({ products }) => setProducts(products));
    }, [http]);

    return (
      <div>
        <h1>Products</h1>
        This is the generated root route.{' '}
        <Link to={path()}>Click here for Home.</Link>
        <ul>
          {products.map((product) => {
            return <li key={product.id}>{product.description}</li>;
          })}
        </ul>
      </div>
    );
  };
}
