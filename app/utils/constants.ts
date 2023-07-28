export const APP_VERSION = '2.0';

export function userOnMobile(): boolean {
  if (typeof navigator === 'undefined') return false;

  const userAgent = navigator.userAgent.toLowerCase();
  return /iphone|ipod|ipad|android/.test(userAgent);
}
