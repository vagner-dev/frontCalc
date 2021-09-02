import api from './controller/apiController.js'
import { populateOptions, initAnimation, resetAnimation } from './controller/domController.js'



const apiResult = await api();

populateOptions(apiResult.apiMarcas, '#brand')
populateOptions(apiResult.apiMedimentos, '#medicine')
const form = document.querySelector('#form')

const buttonCalc = document.getElementById("btn-calc");
const buttonResult = document.getElementById("btn-result");

buttonCalc.addEventListener("click", initAnimation);
buttonResult.addEventListener("click", resetAnimation);
