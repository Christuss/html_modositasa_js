window.addEventListener("load", init);
function init() {
  const tartalom = document.getElementById("tartalom");
  const tartalomMaskepp = document.querySelector("#tartalom");
  const tartalomMaskepp2 = document.querySelector(".tart");
  const tartalomMaskepp3 = document.querySelectorAll(".tart");
  console.log(tartalomMaskepp3);

  const etelek = ["spagetti", "paprika", "uborka"];
  etelekKiiras(etelek, tartalomMaskepp3);
  kepMegjelenites(tartalomMaskepp3);
}
function etelekKiiras(etelek, tartalomMaskepp3) {
  let szoveg = "";
  szoveg += "<ul>";
  for (let index = 0; index < 3; index++) {
    let element = etelek[index];
    szoveg += "<li>" + element + "</li>";
  }
  szoveg += "</ul>";
  tartalomMaskepp3[1].innerHTML = szoveg;
}
function kepMegjelenites(tartalomMaskepp3) {
  const kep = document.createElement('img');
  kep.src = 'https://images.immediate.co.uk/production/volatile/sites/30/2022/09/Spicy-tomato-spaghetti-caf3053.jpg';
  kep.alt = "spagetti";
  kep.width = "400";
  tartalomMaskepp3[1].appendChild(kep);
  
}
