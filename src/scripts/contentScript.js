// This script is injected into the page when the extension is activated.
// Made by Melwin Kramer 2023

const createFileObserver = () => {
  const fileObserver = setInterval(() => {
    const fileSource = document.querySelector("iframe")?.src || undefined;
    if (fileSource != undefined) {
      let buttons = document.getElementsByClassName("ui-dialog-buttonset")[0];

      let viewButton = document.createElement("button");
      viewButton.classList.add("ui-button");
      viewButton.classList.add("viewfile-button");
      viewButton.innerHTML = "View file";
      viewButton.before = "none";

      if (buttons == null) {
        console.error("No buttons found"); // Can only happen if StudIP changes the class name
      }

      viewButton.addEventListener("click", () => window.location.href = fileSource );
      if (buttons.getElementsByClassName("viewfile-button").length === 0) buttons.appendChild(viewButton);
    }else{ /* console.log("No file found"); */ }
  }, 500); // 500ms interval, possiblily to low
};

const init = async () => {
    /* This function is async everything initialized here should start without await(ing) something! */

    createFileObserver();
};

init();