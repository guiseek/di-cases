import { register } from '@sqnl/di';
import { Http } from './ports/http';
import { FetchHttpImpl } from './infrastructure/fetch-http.impl';

export function sharedDataAccess() {
  register({
    for: Http,
    use: FetchHttpImpl,
  });
}
