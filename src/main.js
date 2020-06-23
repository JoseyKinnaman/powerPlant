import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { storeState, changeState } from './../src/plant.js';

$(document).ready(function() {
  const stateChanger = storeState();
  const blueFood = changeState("soil")(5)

  $('#feed').click(function(){
    const newState = stateChanger(blueFood);
    
    $('#soil-value').text(newState.soil);
  });

  $('#light').click(function() {
    const newState = stateChanger();
    $('#light-value').text(newSta)
  });
});