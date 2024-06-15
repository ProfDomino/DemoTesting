import { UserProfile } from 'app/_contexts/user-profile';

export const fetchEndpoint = async (
  fetchToken: ((flag?: boolean) => Promise<string>) | null,
  path: string,
  method: "GET" | "POST" | "PUT",
  body?: UserProfile
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

  if (method === "POST" || method === "PUT") {
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
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${renewedToken}`,
        },
        body: JSON.stringify(body),
      }
    );
    return retryResponse;
  }
  return response;
};
