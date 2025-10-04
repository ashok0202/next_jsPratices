import { APIENDPOINT, axiosInstance } from "../interceptors/configuration";
import { HEADERS } from "../models/constants";

const buildUrl = (endPoint: APIENDPOINT, url: string): string => {
  const baseUrl = axiosInstance.defaults.baseURL;
  switch (endPoint) {
    case APIENDPOINT.user:
      url = `${baseUrl}/user/${url}`;
      break;
  }

  return url;
};

export class AppHttp {
  public static get(endPoint: APIENDPOINT, url: string) {
    const requestUri = buildUrl(endPoint, url);
    return axiosInstance.get(requestUri);
  }

  public static post(
    endPoint: APIENDPOINT,
    url: string,
    request: unknown,
    postFile: boolean = false
  ) {
    const requestUri = buildUrl(endPoint, url);

    const config = postFile
      ? {
          headers: HEADERS.fileType,
        }
      : {
          headers: HEADERS.jsonType,
        };

    const body = postFile ? (request as FormData) : JSON.stringify(request);

    return axiosInstance.post(requestUri, body, config);
  }

  public static put(
    endPoint: APIENDPOINT,
    url: string,
    request: unknown,
    postFile: boolean = false
  ) {
    const requestUri = buildUrl(endPoint, url);
    const config = postFile
      ? {
          headers: HEADERS.fileType,
        }
      : {
          headers: HEADERS.jsonType,
        };
    const body = postFile ? (request as FormData) : JSON.stringify(request);
    return axiosInstance.put(requestUri, body, config);
  }

  public static delete(endPoint: APIENDPOINT, url: string) {
    const requestUri = buildUrl(endPoint, url);
    return axiosInstance.delete(requestUri);
  }

  public static patch(endPoint: APIENDPOINT, url: string) {
    const requestUri = buildUrl(endPoint, url);
    return axiosInstance.patch(requestUri);
  }
}
