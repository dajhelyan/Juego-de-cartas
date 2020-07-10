import { changeHash } from "../lib/home-controller.js";

export const homeView = () => {
	const divElement = document.createElement("section");
	divElement.classList.add("container-home")
	divElement.innerHTML = `
    <div>
			<h1>Memorama Salvaje</h1>
			<button type="button" id="table-start" class="btn-start">¡A jugar!</button>
    </div>
		`
		;

  const tableStart = divElement.querySelector("#table-start");
  tableStart.addEventListener("click", () => {
    changeHash("#/table");
  });

  return divElement;
};
