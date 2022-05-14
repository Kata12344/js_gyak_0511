
function $(elem){
    return document.querySelectorAll(elem)  //tömböt ad vissza eredményül!!!
}

window.addEventListener("load", function (){
    beolvas(lepkekTomb,"adatok.json","kulcs","pillangók",megjelenit);
    //$("button")[0].addEventListener("click", megjelenit)
});

function megjelenit(){
    //article tagbe kiir divbe számokat 10 db-ot

    const tarolo = $("article")[0];

    let txt="";

    for (let index = 0; index < lepkekTomb.length; index++) {
        txt+=`<div>${lepkekTomb[index].fajta},${lepkekTomb[index].szin}</div>`
        
    }
    tarolo.innerHTML=txt
}
const lepkekTomb=[];

function beolvas(tomb,fajlnev,kulcs,callbackfv){
    fetch(fajlnev)  //a fetch aszinkron hívás vagyis várok arra, hogy megérkezzenek az adatok de addig megy a többi progi
    .then(valasz => valasz.json())  //itt derül ki hogy sikerült e fájlt megfogni
    .then(adat => {console.log(adat)  // ez objektum
    //lepkék adatait beteszem a tömbbe
    //bejárjuk a json fájlban a lévő tömböt
        console.log(adat.[kulcs])  // ez tömb
    //minden elemét betesszük a tömb-be
    adat.[kulcs].forEach(lepke => {
        console.log(lepke)
        tomb.push(lepke)
    });
    console.log(tomb)
    callbackfv();//callback függvény hívás
    })
    .catch(err=>{console.log(err)});
}
