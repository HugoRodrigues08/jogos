function corrida() {
var vid0 = Math.floor(Math.random() * 500);
var cavalo0 = document.querySelector("#i0");
cavalo0.innerHTML = "<marquee scrolldelay=" + vid0 +"> <h1>🎠</h1> </marquee>";

var vid1 = Math.floor(Math.random() * 500);
var cavalo1 = document.querySelector("#i1");
cavalo1.innerHTML = "<marquee scrolldelay=" + vid1 +"> <h1>🏇</h1> </marquee>";

var vid2 = Math.floor(Math.random() * 500);
var cavalo2 = document.querySelector("#i2");
cavalo2.innerHTML = "<marquee scrolldelay=" + vid2 +"> <h1>🐎</h1> </marquee>";

var vid3 = Math.floor(Math.random() * 500);
var cavalo3 = document.querySelector("#i3");
cavalo3.innerHTML = "<marquee scrolldelay=" + vid3 +"> <h1>🏇</h1> </marquee>";

var vid4 = Math.floor(Math.random() * 500);
var cavalo4 = document.querySelector("#i4");
cavalo4.innerHTML = "<marquee scrolldelay=" + vid4 +"> <h1>🎠</h1> </marquee>";

var vid5 = Math.floor(Math.random() * 500);
var cavalo5 = document.querySelector("#i5");
cavalo5.innerHTML = "<marquee scrolldelay=" + vid5 +"> <h1>🐎</h1> </marquee>";
}