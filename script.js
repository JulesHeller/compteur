let date = new Date(2022, 7, 31, 10, 30, 0);

setInterval(compteur, 1000);

function compteur() {
    now = new Date();
    let diff = now - date;

    let heures = (Math.floor(diff / 3600000)).toString();
    if (heures.length == 1) {
        heures.toString();
        heures = "0" + heures;
    }
    let minutes = (Math.floor(diff / 60000) - heures * 60).toString();
    if (minutes.length == 1) {
        minutes.toString();
        minutes = "0" + minutes;
    }
    let secondes = (Math.floor(diff / 1000) - Math.floor(diff / 60000) * 60).toString();
    if (secondes.length == 1) {
        secondes.toString();
        secondes = "0" + secondes;
    }

    document.querySelector(".compteur .heures").innerHTML = heures;
    document.querySelector(".compteur .minutes").innerHTML = minutes;
    document.querySelector(".compteur .secondes").innerHTML = secondes;
}