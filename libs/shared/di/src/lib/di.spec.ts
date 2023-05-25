import { sharedDi } from './di';

describe('sharedDi', () => {
  it('should work', () => {
    expect(sharedDi()).toEqual('shared-di');
  });
});
