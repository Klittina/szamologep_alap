window.addEventListener("load", init);

function ID(elem) {
    return document.getElementById(elem);
}

function $(elem) {
    return document.querySelectorAll(elem);
}

function init() {
    var szamokvar = " ";
    console.log("szamokvar definiálása");
    for (let index = 1; index < 11; index++) {
        szamokvar += '<button id="szam';
        szamokvar += index;
        szamokvar += '">';
        if (index === 10) {
            szamokvar += "0";
        } else {
            szamokvar += index;
        }

        szamokvar += "</button>";

    }
    $(".szamok")[0].innerHTML = szamokvar;
    //ID(".szamok").addEventListener("click", beiras);
    //$(".torles").addEventListener("click", torles);
    ID("szam1").addEventListener("click", szamegy);
    ID("szam2").addEventListener("click", szamkett);
    ID("szam3").addEventListener("click", szamhar);
    ID("szam4").addEventListener("click", szamnegy);
    ID("szam5").addEventListener("click", szamot);
    ID("szam6").addEventListener("click", szamhat);
    ID("szam7").addEventListener("click", szamhet);
    ID("szam8").addEventListener("click", szamnyolc);
    ID("szam9").addEventListener("click", szamkil);
    ID("szam10").addEventListener("click", szamnul);
    ID("torles").addEventListener("click", torles);
    ID("osszeadas").addEventListener("click", ossz);
    ID("kivonas").addEventListener("click", ki);
    ID("szorzas").addEventListener("click", szor);
    ID("osztas").addEventListener("click", oszt);
    ID("egyenlo").addEventListener("click", egyenlo);

}
var kijelzovar = "";
var szamoktomb = [];
var muvjel;
var sendhelp = [];
var eredmeny;

function szamegy() {
    kijelzovar += 1;
    szamoktomb += 1;
    $(".kijelzo")[0].innerHTML = kijelzovar;
    console.log('egy');
    console.log(szamoktomb);
}

function szamkett() {
    kijelzovar += 2;
    szamoktomb += 2;
    $(".kijelzo")[0].innerHTML = kijelzovar;
    console.log('egy');
    console.log(szamoktomb);
}

function szamhar() {
    kijelzovar += 3;
    szamoktomb += 3;
    $(".kijelzo")[0].innerHTML = kijelzovar;
}

function szamnegy() {
    kijelzovar += 4;
    szamoktomb += 4;
    $(".kijelzo")[0].innerHTML = kijelzovar;
}

function szamot() {
    kijelzovar += 5;
    szamoktomb += 5;
    $(".kijelzo")[0].innerHTML = kijelzovar;
}

function szamhat() {
    kijelzovar += 6;
    szamoktomb += 6;
    $(".kijelzo")[0].innerHTML = kijelzovar;
}

function szamhet() {
    kijelzovar += 7;
    szamoktomb += 7;
    $(".kijelzo")[0].innerHTML = kijelzovar;
}

function szamnyolc() {
    kijelzovar += 8;
    szamoktomb += 8;
    $(".kijelzo")[0].innerHTML = kijelzovar;
}

function szamkil() {
    kijelzovar += 9;
    szamoktomb += 9;
    $(".kijelzo")[0].innerHTML = kijelzovar;
}

function szamnul() {
    kijelzovar += 0;
    szamoktomb += 0;
    $(".kijelzo")[0].innerHTML = kijelzovar;
}

function torles() {
    kijelzovar = " ";
    $(".kijelzo")[0].innerHTML = kijelzovar;
}

function ossz() {
    if (kijelzovar)
        kijelzovar += "+";
    muvjel = "+";
    szamoktomb += muvjel;
    $(".kijelzo")[0].innerHTML = kijelzovar;
}

function ki() {
    kijelzovar += "-";
    muvjel = "-";
    szamoktomb += muvjel;
    $(".kijelzo")[0].innerHTML = kijelzovar;
}

function szor() {
    kijelzovar += "*";
    muvjel = "*";
    szamoktomb += muvjel;
    $(".kijelzo")[0].innerHTML = kijelzovar;
}

function oszt() {
    kijelzovar += "/";
    muvjel = "/";
    szamoktomb += muvjel;
    $(".kijelzo")[0].innerHTML = kijelzovar;
}

function egyenlo() {
    sendhelp.splice(0, sendhelp.length);
    if (muvjel === "+") {
        sendhelp = szamoktomb.split("+");
        console.log(sendhelp);
        eredmeny = sendhelp[0] + sendhelp[1];
        $(".kijelzo")[0].innerHTML = eredmeny;

    } else if (muvjel === "-") {
        sendhelp = szamoktomb.split("-");
        console.log(sendhelp);
        eredmeny = sendhelp[0] - sendhelp[1];
        $(".kijelzo")[0].innerHTML = eredmeny;
    } else if (muvjel === "*") {
        sendhelp = szamoktomb.split("*");
        console.log(sendhelp);
        eredmeny = sendhelp[0] * sendhelp[1];
        $(".kijelzo")[0].innerHTML = eredmeny;
    } else if (muvjel === "/") {
        sendhelp = szamoktomb.split("/");
        console.log(sendhelp);
        eredmeny = sendhelp[0] / sendhelp[1];
        $(".kijelzo")[0].innerHTML = eredmeny;
    }

}