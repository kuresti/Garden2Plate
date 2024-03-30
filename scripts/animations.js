

function toggleMenu() {
    
    document.querySelectorAll(".hambtn").forEach((element) => {
        element.addEventListener("click", () => {
            document.querySelectorAll(".primarynav").forEach( (menu) => {
                menu.classList.toggle("open");
            });
            document.querySelectorAll("#nav-icon").forEach( (icon) => {
                icon.classList.toggle("open");
            });
        });
    });    
}

toggleMenu();



