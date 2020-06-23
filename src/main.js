import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { storeState, changeState } from './../src/plant.js';

$(document).ready(function() {
  const stateChanger = storeState();
  const blueFood = changeState("soil")(5);
  const blueLight = changeState("light")(20);
  $('#feed').click(function(){
    const newState = stateChanger(blueFood);
    
    $('#soil-value').text(newState.soil);
  });

  $('#light').click(function() {
    const newState = stateChanger(blueLight);
    $('#light-value').text(newState.light);
  });
});