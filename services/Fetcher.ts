export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const postFetcher = (url: string, body: unknown) =>
  fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application.json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
