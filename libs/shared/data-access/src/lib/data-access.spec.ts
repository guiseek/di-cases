import { inject } from '@sqnl/di';
import { FetchHttpImpl } from './infrastructure/fetch-http.impl';
import { sharedDataAccess } from './data-access';
import { Http } from './ports/http';

describe('sharedDataAccess', () => {
  it('should work', () => {
    sharedDataAccess();
    const http = inject(Http);
    expect(http).toBeInstanceOf(FetchHttpImpl);
  });
});
