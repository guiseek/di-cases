export abstract class Http {
  abstract get<T>(
    url: string,
    params?: Record<string, PropertyKey>,
    headers?: Record<string, string>
  ): Promise<T>;
}
