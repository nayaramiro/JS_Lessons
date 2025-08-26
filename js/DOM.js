var p = document.querySelectorAll("p");
var parent = p[1].offsetParent;
p.forEach((item, index) => {
  console.log(item.offsetTop);
  item.innerHTML = item.innerHTML + " - " + [index];
});
