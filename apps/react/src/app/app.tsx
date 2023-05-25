import { inject } from '@sqnl/di';
import { Home } from './ports';
import './app.scss';

function App() {
  const HomePage = inject(Home);

  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
