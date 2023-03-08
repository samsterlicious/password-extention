import { getIcon } from "./createIcon.js";
import { getPasswordInput, getUsernameInput } from "./selector.js";
console.log("hi");
const username = getUsernameInput();
console.log("uu", username);
if (username) {
  username.parentNode!.append(
    getIcon(username.scrollHeight, username.clientLeft + username.scrollLeft)
  );
}

const password = getPasswordInput();

if (password && !username) {
  password.parentNode!.append(
    getIcon(password.scrollHeight, password.clientLeft + password.scrollLeft)
  );
}
