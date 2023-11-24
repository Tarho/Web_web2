var bold_Items;

window.onload = getBold_items();

// Collect all <strong> tags
function getBold_items() {
  bold_Items = document.getElementsByTagName("strong");
}

// Iterate all bold tags and change color
function highlight() {
  for (var i = 0; i < bold_Items.length; i++) {
    bold_Items[i].style.fontWeight = "bold";
  }
}

// On mouse out highlighted words become normal
function return_normal() {
  for (var i = 0; i < bold_Items.length; i++) {
    bold_Items[i].style.fontWeight = "normal";
  }
}
