// VARIABLES
const hamburger = document.querySelector("#btn-hamburger");
const navBar = document.querySelector("#nav-bar");
const hambTop = document.querySelector("#hamburger-top");
const hambMid = document.querySelector("#hamburger-middle");
const hambBtm = document.querySelector("#hamburger-bottom");
const header = document.querySelector("#header");


hamburger.addEventListener("click", () => {
    // Check navBar visibility
    const navBarOpen = navBar.getAttribute("state");
    const headerState = header.getAttribute("state");

    // Change the states
    // If the header and navbar are closed, open them
    if (navBarOpen === "closed" || navBarOpen === "none") {
        navBar.setAttribute("state", "open");
        header.setAttribute("state", "open")
    
    // If the navbar is open, close it
    } else if (navBarOpen === "open") {
        navBar.setAttribute("state", "closed");
        header.setAttribute("state", "closed")
    }

    // Change the toggle button
    const hambButtons = [hambTop, hambMid, hambBtm];
    hambButtons.forEach(button => {
        // Get the states of the hamburger button
        let btnState = button.getAttribute("state");

        // If it is hamburger, change it to arrow
        if (btnState === "hamburger") {
            button.setAttribute("state", "arrow");
        
        // If it is arrow, change it to hamburger
        } else if (btnState === "arrow") {
            button.setAttribute("state", "hamburger");
        }
    })
});


document.addEventListener("click", (e) => {
    const navMenuIds = ["mobile-nav-menu", "btn-hamburger", "hamburger-top", "hamburger-middle", "hamburger-bottom",  "header", "nav-bar"];


    if (navMenuIds.every(idName => idName !== e.target.id)) { 
        navBar.setAttribute("state", "closed");
        header.setAttribute("state", "closed")

        const hambButtons = [hambTop, hambMid, hambBtm];
        hambButtons.forEach(button => {
            // Get the states of the hamburger button
            let btnState = button.getAttribute("state");

            // If it is hamburger, change it to arrow
            if (btnState === "hamburger") {
                button.setAttribute("state", "arrow");
            
            // If it is arrow, change it to hamburger
            } else if (btnState === "arrow") {
                button.setAttribute("state", "hamburger");
            }
        });
    }
});

