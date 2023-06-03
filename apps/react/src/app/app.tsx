import { inject } from '@sqnl/di';
import { Router } from './app.providers';
import './app.scss';

function App() {
  const RouterPage = inject(Router);

  return <RouterPage />;
}

export default App;
