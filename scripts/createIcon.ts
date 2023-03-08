const offset = 15;

export function getIcon(height: number, leftAmount: number) {
  const box = document.createElement("span");
  box.style.cssText = `position:absolute;left:${
    leftAmount + offset
  }px;ddisplay:inline-flex;flex-direction:row;justify-content:center;cursor:pointer;height:${height}px`;

  const icon = document.createElement("img");
  icon.src = chrome.runtime.getURL("images/lock-16.png");
  box.appendChild(icon);

  return box;
}
