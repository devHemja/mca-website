function myFunction() {
    var icon = document.getElementById("collapseIcon");
    var x = document.getElementById("collapse");
    if (x.className === "nav_items") {
        x.className += " responsive_nav";
        icon.className = "bi bi-x-circle";
        icon.style.fontSize = '1.7rem';
    } else {
        x.className = "nav_items";
        icon.className = "bi bi-list";
        icon.style.fontSize = '2rem';
    }
}