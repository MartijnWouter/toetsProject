"use strict";
//import {Tocht} from './tocht';
//import das not work on html so class is here to
class Tocht{
  //let arrival;
  constructor(data){
    this.id = data.id;
    this.left = data.left;
  }
  duur(){
    //calculation is for later
  }
}

const tochten = [];

function genId(isTochten){

  if(isTochten === true){
    let length = tochten.length;
    return length;
  }
}
function newTocht(){
  let leftVar = document.getElementById("leftTime").value;
  let idVar = genId(true);
  console.log(idVar);
  let instence = new Tocht({id : idVar, left : leftVar});
  tochten.push(instence);
  console.log(tochten);
  document.getElementById("output").innerHTML = "tocht nummer is: " + idVar;
}
