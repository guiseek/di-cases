import { env } from '../../envs/env';

export const path = (path = '') => {
  return [env.base, path].join('/');
};
