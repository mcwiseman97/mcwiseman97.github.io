var x = document.getElementById("home");
var y = document.getElementById("anvil");
var z = document.getElementById("explosives");
var n = document.getElementById("decoys");
var m = document.getElementById("traps");


y.style.display = "none";
z.style.display = "none";
n.style.display = "none";
m.style.display = "none";

let URL = "../acme/js/acme.json";
let anvilData;
let expData;
let decoyData;
let trapData;
fetch(URL)
.then(acme => acme.json())
.then(function (data) {
    console.log('Json object from getCode function:');
    console.log(data);
    const pageData = {};
    pageData["nav"] = "Anvils";
    pageData["name"] = data.Anvils.name;
    pageData["decription"] = data.Anvils.description;
    pageData["manufacturer"] = data.Anvils.manufacturer;
    pageData["path"] = data.Anvils.path;
    pageData["price"] = data.Anvils.price;
    pageData["reviews"] = data.Anvils.reviews;

    const explosivesData = {};
    explosivesData["nav"] = "Explosives";
    explosivesData["name"] = data.Explosives.name;
    explosivesData["decription"] = data.Explosives.description;
    explosivesData["manufacturer"] = data.Explosives.manufacturer;
    explosivesData["path"] = data.Explosives.path;
    explosivesData["price"] = data.Explosives.price;
    explosivesData["reviews"] = data.Explosives.reviews;

    const decoysData = {};
    decoysData["nav"] = "Decoys";
    decoysData["name"] = data.Decoys.name;
    decoysData["decription"] = data.Decoys.description;
    decoysData["manufacturer"] = data.Decoys.manufacturer;
    decoysData["path"] = data.Decoys.path;
    decoysData["price"] = data.Decoys.price;
    decoysData["reviews"] = data.Decoys.reviews;

    const trapsData = {};
    trapsData["nav"] = "Traps";
    trapsData["name"] = data.Traps.name;
    trapsData["decription"] = data.Traps.description;
    trapsData["manufacturer"] = data.Traps.manufacturer;
    trapsData["path"] = data.Traps.path;
    trapsData["price"] = data.Traps.price;
    trapsData["reviews"] = data.Traps.reviews;

    anvilData = pageData;
    expData = explosivesData;
    decoyData = decoysData;
    trapData = trapsData;
})

function navImport(){
    const navItemAnvil = document.getElementById("nameAnvils");
    const navItemExp = document.getElementById("nameExplosives");
    const navItemDec = document.getElementById("nameDecoys");
    const navItemTrap = document.getElementById("nameTraps");

    navItemAnvil.innerHTML = anvilData.nav;
    navItemExp.innerHTML = expData.nav;
    navItemDec.innerHTML = decoyData.nav;
    navItemTrap.innerHTML = trapData.nav;
}

function changeHomeClass(){
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
        n.style.display = "none";
        m.style.display = "none";
    }  
}

function changeAnvilClass(){
    var contentTitle = document.getElementById("contentTitle");

    let anvilDescription = document.getElementById("anvilDescription");
    let anvilManufacturer = document.getElementById("anvilManufacturer");
    let anvilReview = document.getElementById("anvilReview");
    let anvilPrice = document.getElementById("anvilPrice");

    anvilPrice.innerHTML = anvilData.price;
    anvilReview.innerHTML = anvilData.reviews;
    anvilManufacturer.innerHTML = anvilData.manufacturer;
    anvilDescription.innerHTML = anvilData.decription;
    contentTitle.innerHTML = anvilData.name;

    document.getElementById("anvilImg").src = anvilData.path;
    if (y.style.display === "none") {
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
        n.style.display = "none";
        m.style.display = "none";
    } 
}

function changeExplosivesClass(){
    let contentTitle = document.getElementById("contentTitleExp");
    let explosiveDescription = document.getElementById("explosivesDescription");
    let explosiveManufacturer = document.getElementById("explosivesManufacturer");
    let explosiveReview = document.getElementById("explosivesReview");
    let explosivePrice = document.getElementById("explosivesPrice");

    explosivePrice.innerHTML = expData.price;
    explosiveReview.innerHTML = expData.reviews;
    explosiveManufacturer.innerHTML = expData.manufacturer;
    explosiveDescription.innerHTML = expData.decription;
    contentTitle.innerHTML = expData.name;

    document.getElementById("explosivesImg").src = expData.path;
    if (z.style.display === "none") {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block";
        n.style.display = "none";
        m.style.display = "none";
    } 
}

function changeDecoysClass(){
    let contentTitle = document.getElementById("contentTitleDec");
    let decoyDescription = document.getElementById("decoysDescription");
    let decoyManufacturer = document.getElementById("decoysManufacturer");
    let decoyReview = document.getElementById("decoysReview");
    let decoyPrice = document.getElementById("decoysPrice");

    decoyPrice.innerHTML = decoyData.price;
    decoyReview.innerHTML = decoyData.reviews;
    decoyManufacturer.innerHTML = decoyData.manufacturer;
    decoyDescription.innerHTML = decoyData.decription;
    contentTitle.innerHTML = decoyData.name;

    document.getElementById("decoysImg").src = decoyData.path;
    if (n.style.display === "none") {
        x.style.display = "none";
        y.style.display = " none";
        z.style.display = "none";
        n.style.display = "block";
        m.style.display = "none";
    } 
}

function changeTrapsClass(){
    console.log("Traps works");
    let contentTitle = document.getElementById("contentTitleTrap");
    let trapDescription = document.getElementById("trapsDescription");
    let trapManufacturer = document.getElementById("trapsManufacturer");
    let trapReview = document.getElementById("trapsReview");
    let trapPrice = document.getElementById("trapsPrice");
    console.log();
    trapPrice.innerHTML = trapData.price;
    trapReview.innerHTML = trapData.reviews;
    trapManufacturer.innerHTML = trapData.manufacturer;
    trapDescription.innerHTML = trapData.decription;
    contentTitle.innerHTML = trapData.name;

    document.getElementById("trapsImg").src = trapData.path;
    if (m.style.display === "none") {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
        n.style.display = "none";
        m.style.display = "block";
    }

}   