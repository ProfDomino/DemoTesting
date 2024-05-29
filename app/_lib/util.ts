export const fetchEndpoint = async (
  fetchToken: ((flag?: boolean) => Promise<string>) | null,
  path: string,
  method: "GET" | "POST",
  body: Record<
    string,
    string | string[] | boolean | number | Record<string, string>[]
  >
): Promise<Response> => {
  const accessToken = fetchToken ? await fetchToken() : "";

  const options: RequestInit = {
    cache: "no-store",
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  if (method === "POST") {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HTTPS_ENDPOINT}${path}`,
    options
  );

  if (response.status !== 401) {
    return response;
  }

  const renewedToken = fetchToken ? await fetchToken(true) : "";
  if (renewedToken !== accessToken) {
    const retryResponse = await fetch(
      `${process.env.NEXT_PUBLIC_HTTPS_ENDPOINT}${path}`,
      {
        cache: "no-store",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(body),
      }
    );
    return retryResponse;
  }
  return response;
};
