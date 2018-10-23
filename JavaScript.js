
// Home JavaScript.

const databaseimg = document.querySelectorAll(".databaseimg");
const pic = databaseimg.length;
var id;

function homeonload(){
  id = document.querySelector(".imgPlace").id;
  id = Number(id);
}

function slider(text) {
  if (text === "left") {
    id = id - 1;
    if (id === 0) {
      id = pic;
    }
    imagechange(id);
  }

  if (text === "right") {
    id = id + 1;
    if (id === pic + 1) {
      id = 1;
    }
    imagechange(id);
  }
}

function imagechange(id) {
    image = databaseimg[id - 1].src;
    text = databaseimg[id - 1].id;
    document.querySelector(".imgPlace").src = image;
    document.querySelector(".place").innerHTML = text;
}

// Reservation JavaScript.

function resName(text){
  document.querySelector(".tripDetail").innerHTML = text + " RESERVATION";
}

function resCheck(){
  var leaving = document.frm.leaving.value;
  var going = document.frm.going.value;

  //var optionlen = document.frm.going.length;

  if(going === leaving){
    document.querySelector(".message").innerHTML = "Leaving from and Going to value is same.";
  }
  else if(going !== leaving){
    document.querySelector(".message").innerHTML = "";
    document.querySelector("#total").style.display = "block";
    document.querySelector("#amount").style.display = "block";

    //for(i = 1 ; i <= optionlen ; i++){ }

    if(going === "MUMBAI"){
      economic = 500 ; business = 1000;
    }
    else if(going === "DELHI"){
      economic = 1000 ; business = 1500;
    }
    else if(going === "BANGLORE"){
      economic = 1500 ; business = 2000;
    }
    check(economic , business);
  }
}

function check(economic , business){
  var journeyway = document.frm.journeyway.value;

  if(journeyway === "ONE WAY"){
    journey = 1;
  }
  else{
    journey = 2;
  }

  var adult = document.frm.adult.value;
  var child = document.frm.child.value;

  var cabinclass = document.frm.cabinclass.value;

  if(cabinclass === "ECONOMY"){
    document.querySelector("#amount").innerHTML = ( (Number(adult) + Number(child)) * economic ) * journey;
  }
  else{
    document.querySelector("#amount").innerHTML = ( (Number(adult) + Number(child)) * business ) * journey;
  }
}

// Login JavaScript

function signUp()
{
  document.querySelector(".mainLogin").style.display = "none";
  document.querySelector(".mainRegistration").style.display = "block";
}

function back()
{
  document.querySelector(".mainLogin").style.display = "block";
  document.querySelector(".mainRegistration").style.display = "none";
}

var id = document.querySelector(".loginImgPlace").id;
id = Number(id) + 1;

function loginimgonload()
{
  var refreshId = setInterval("onloadimg()", 3000);
}

function onloadimg()
{
  if(id == pic + 1)
  {
    id = 1;
  }
  image = databaseimg[id - 1].src;
  text = databaseimg[id - 1].id;
  document.querySelector(".loginImgPlace").src = image;
  document.querySelector(".loginImageNames").innerHTML = text;
  id++;
}

function textfocus(text)
{
  document.getElementById(text).style.display = "none";
}

function textblur(name , id)
{
  if(document.getElementById(id).value === "")
  {
    document.getElementById(name).style.display = "block";
  }
}
