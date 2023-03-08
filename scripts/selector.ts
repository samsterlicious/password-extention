export function getPasswordInput() {
  return (
    document.querySelector('input[name*="password"]') ??
    document.querySelector('input[id*="password"]') ??
    document.querySelector('input[type="password"]')
  );
}

export function getUsernameInput() {
  return (
    document.querySelector('input[name*="username"]') ??
    document.querySelector('input[id*="username"]')
  );
}
