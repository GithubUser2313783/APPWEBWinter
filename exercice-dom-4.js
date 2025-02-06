function sombre() {
    let elem1 = document.getElementsByTagName("body");
        for (let i=0;i<elem1.length;i++) {
            elem1[i].style.backgroundColor="rgb(53, 81, 81)";
        }
    let elem2 = document.getElementsByTagName("p");
        for (let i=0;i<elem2.length;i++) {
            elem2[i].style.color="grey";
        }
    let elem3 = document.getElementsByClassName("titre");
        for (let i=0;i<elem3.length;i++) {
            elem3[i].style.color="palegreen";
        }
}