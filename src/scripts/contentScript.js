// This script is injected into the page when the extension is activated.
// Made by Melwin Kramer 2023

const injectCustomCss = () => {

    // Work in progress custom dark theme
    /*const customCss = document.createElement("link");
    customCss.rel = "stylesheet";
    customCss.href = chrome.runtime.getURL("src/styles/darkTheme.css"); // THIS IS SPECIAL CHROME CODE, INCOMPATIBLE WITH FIREFOX AND OTHER BROWSERS
    document.head.appendChild(customCss);*/

    // Replace basic avatar with cat avatar
    const avatarObserver = setInterval(() => {
        const avatars = document.querySelectorAll("img");
        // check if avatar is include in a class name
        avatars.forEach(avatar => {
            if (avatar.src.includes("nobody")) {
                avatar.src = "https://natusan.co.uk/cdn/shop/articles/natusan-blog-how-cat-years-work-header_600x600_crop_center.jpg?v=1674474680"
            }
        });
    }, 500); // 500ms interval, possiblily to low
}

const createFileObserver = () => {
  const fileObserver = setInterval(() => {
    const fileSource = document.querySelector("iframe")?.src || undefined;
    if (fileSource != undefined) {
      let buttons = document.getElementsByClassName("ui-dialog-buttonset")[0];

      let viewButton = document.createElement("button");
      viewButton.classList.add("ui-button");
      viewButton.classList.add("viewfile-button");
      viewButton.innerHTML = "View file";

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
    // injectCustomCss(); Work in progress
};

window.addEventListener("load", () => {
    init(); // Start the init function when the page is loaded
});