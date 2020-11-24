// NAV burg

$("#nav_toggle").on("click", function (event) {
    event.preventDefault();

    $(this).toggleClass("active");
    document.querySelector(".nav").classList.toggle("active");
    document.querySelector(".nav_head").classList.toggle("active");
    document.querySelector("header").classList.toggle("active");
});

// NAV BAR CLOSE IF U CLICK ON STUFF
function close() {
    $(this).removeClass("active");
    document.querySelector(".nav").classList.remove("active");
    document.querySelector(".nav_head").classList.remove("active");
    document.querySelector(".nav-toggle").classList.remove("active");
    document.querySelector("header").classList.remove("active");
}
// document.getElementById('gallery_close').addEventListener('click', close);
// document.getElementById('form_close').addEventListener('click', close);
// document.getElementById('feedback_close').addEventListener('click', close);
// document.getElementById('footer_close').addEventListener('click', close);

// SERVICES


// MODAL

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}