/*let elemone = document.getElementById("1");
elemone.innerHTML = "pomme";

let elemtwo = document.getElementById("2");
elemtwo.innerHTML = "poire";

let elemthree = document.getElementById("3");
elemthree.innerHTML = "banane";
*/
function changeInnerHTML(id, innerHTML) {
    let elm = document.getElementById(id);
    elm.innerHTML = innerHTML;
} 

changeInnerHTML("1", "pomme")
changeInnerHTML("2", "poire")
changeInnerHTML("3", "banane")