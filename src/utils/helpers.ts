export function detectMobile() {
  function _detectMob() {
    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
    ];
    return toMatch.some(toMatchItem => {
      return navigator.userAgent.match(toMatchItem);
    });
  }
  if (_detectMob() || window.innerWidth < 700) return true;
  if (window.innerWidth > 800) return false;
}

export const inDevelopment = process.env.NODE_ENV === "development"