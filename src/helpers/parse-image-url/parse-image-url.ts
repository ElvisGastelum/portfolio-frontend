export function parseImageUrl(url: string): string {
  return process.env.REACT_APP_STRAPI_URL_BASE + url;
}
