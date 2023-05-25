import { Provider, ProviderKey } from './types/provider';
import { Type } from './types/type';

/**
 * Container onde registramos
 * as dependencias instanciadas
 */
const container = new Map();
const relations = new Map();

function inject<T>(type: ProviderKey<T>) {
  try {
    return container.get(type);
  } catch {
    throw `Provider ${type.name} não registrado`;
  }
}

function instantiate<T>({ for: key, use }: Provider<T>): any {
  const concrete = (use ?? key) as Type<typeof use>;
  const dependencies = relations.get(key);

  if (typeof concrete === 'function') {
    try {
      return new concrete(...dependencies);
    } catch {
      return (concrete as Function)(...dependencies);
    }
  }

  return concrete as T;
}

function set<T>(provider: Provider<T>) {
  relations.set(provider.for, (provider.add ?? []).map(inject));
  container.set(provider.for, instantiate(provider));
}

const register = (...providers: Provider[]) => providers.forEach(set);

export { register, inject };
