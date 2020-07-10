import { components } from "../ui/components.js";

export const changeView = (route) => {
  const root = document.getElementById("root");
  root.innerHTML = "";

  switch (route) {
    case "":
    case "#":
    case "#/":
    case "#/home": {
      return root.appendChild(components.home());
    }
    case "#/table": {
      return root.appendChild(components.table());
    }

    default:
      break;
  }
  /* console.log(route, "aqui"); */
};
