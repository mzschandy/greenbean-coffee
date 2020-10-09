function openNav() {
  document.getElementById("myNav").style.height = "100%";
}
/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

function menu(event, menuTab) {
  var i, menuContent, menuLinks;

  menuContent = document.getElementsByClassName("menu-content");
  for (i = 0; i < menuContent.length; i++) {
    menuContent[i].style.display = "none";
  }

  menuLinks = document.getElementsByClassName("tab");
  for (i = 0; i < menuLinks.length; i++) {
    menuLinks[i].className = menuLinks[i].className.replace(" active", "");
  }

  document.getElementById(menuTab).style.display = "block";
  event.currentTarget.className += " active";
}

document.getElementById("open").click();

var items = 0;

function addtoCart() {
  var cart;
  cart = document.getElementById("cartNumber");
  items++;
  cart.innerHTML = items;
  console.log(items);
}
