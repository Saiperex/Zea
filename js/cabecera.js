var itemMenu = document.querySelectorAll(".menu li");

for (var i = 0; i < itemMenu.length; i++) {
  var liElement = itemMenu[i];
  var aElement = liElement.querySelector("a");
  liElement.addEventListener("mouseover", function(event) {
    var hoveredElement = event.currentTarget;
    var hoveredLink = hoveredElement.querySelector("a");
    hoveredElement.style.backgroundColor = "#000";
    hoveredLink.style.color = "#f0f0f0";
  });
  liElement.addEventListener("mouseout", function(event) {
    var hoveredElement = event.currentTarget;
    var hoveredLink = hoveredElement.querySelector("a");
    hoveredElement.style.backgroundColor = "";
    hoveredLink.style.color = "";
  });
}