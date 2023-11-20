window.onload = function() {
    setTimeout(()=>{
        setInterval(()=>{
            // Search if file is loaded
            const file = document.querySelector("iframe");
            if(file != null) {
                let buttons = document.getElementsByClassName("ui-dialog-buttonset")[0];
                let viewButton = document.createElement("button");
                viewButton.classList.add("ui-button");
                viewButton.classList.add("viewfile-button");
                viewButton.innerHTML = "View file";
                if(buttons == null) {
                    console.log("No buttons found")
                }
                viewButton.addEventListener("click", ()=>{
                    window.location.href = file.src;
                });
                if (buttons.getElementsByClassName("viewfile-button").length === 0) buttons.appendChild(viewButton);
            }
        }, 500);
    }, 1000);
    
    
}

console.log("works")
