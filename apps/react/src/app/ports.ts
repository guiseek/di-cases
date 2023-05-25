import { register } from '@sqnl/di';
import { HomeImpl } from './pages/home.impl';

export function Home() {}

register({ for: Home, use: () => HomeImpl() });
