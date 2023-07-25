export const APP_VERSION = '2.0';

export function userOnMobile(): boolean {
  const userAgent = navigator.userAgent.toLowerCase();
  return /iphone|ipod|ipad|android/.test(userAgent);
}
