import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { storeState, changeState } from './../src/plant.js';

$(document).ready(function() {
  // let counter = 0;
  const stateChanger = storeState();
  const stateChanger2 = storeState();
 
  const blueFood = changeState("soil")(5);
  const blueLight = changeState("light")(20);
  const blueWater = changeState("water")(15);

   $('#feed').click(function(){
    const newState = stateChanger(blueFood);
    $('#soil-value').text(newState.soil);
  });

  $('#light').click(function() {
    const newState = stateChanger(blueLight);
    $('#light-value').text(newState.light);
  });

  $('#water').click(function () {
    const newState = stateChanger(blueWater);
    $('#water-value').text(newState.water);
  });

  $('#feed2').click(function(){
    const newState = stateChanger2(blueFood);
    $('#soil2-value').text(newState.soil);
  });

  $('#light2').click(function() {
    const newState = stateChanger2(blueLight);
    $('#light2-value').text(newState.light);
  });

  $('#water2').click(function () {
    const newState = stateChanger2(blueWater);
    $('#water2-value').text(newState.water);
  });
});