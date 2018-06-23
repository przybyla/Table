// @flow

export function fetch(url: string, opts: any): any {
  return window
    .fetch(url, opts)
    .then(response => {
      if (response.status >= 200 && response.status < 300) return { response };
      throw response;
    })
    .catch(error => ({ error }));
}

export function payload(data: any): any {
  const json = JSON.stringify(data, null, 2);
  return json;
}
