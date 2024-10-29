function myFunction() {
    var x = document.getElementById("collapse");
    if (x.className === "nav_items") {
        x.className += " responsive_nav";
    } else {
        x.className = "nav_items";
    }
}