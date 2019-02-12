const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const body = document.getElementById("body");

function getQuote(rastgeleSayi){
    fetch(`https://gist.githubusercontent.com/inescoelho/4a2e848480d2026121f8d5c600ee3c66/raw/f2d2d3dab0d5aded5686b462dcfad7028116e693/HIMYM_quotes.json`)
    .then(res => res.json())
    .then(data => {
        p1.innerHTML=data.quotes[rastgeleSayi].text;
        p2.innerHTML=data.quotes[rastgeleSayi].name;
    })
    .catch(err => console.error(err))
};
let rastgeleSayi=Math.floor(Math.random()*143);
getQuote(rastgeleSayi);
