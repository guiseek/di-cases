import { Http } from '../ports/http';

const metadataDefault = {
  'Content-Type': 'application/json',
};

export class FetchHttpImpl implements Http {
  async get<T>(
    url: string,
    query: Record<string, PropertyKey> = {},
    metadata: Record<string, string> = {}
  ): Promise<T> {
    const params = new URLSearchParams(JSON.stringify(query));
    const headers = { ...metadataDefault, ...metadata };
    const req = fetch(`${url}?${params.toString()}`, { headers });
    return req.then((response) => response.json());
  }
}
