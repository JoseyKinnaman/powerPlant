// This function stores our state.
export const storeState = () => {
  let currentState = {}; // {}
  return (stateChangeFunction) => { 
    const newState = stateChangeFunction(currentState);
    currentState = {...newState} ;
    return newState;
  };
}
//const stateChanger = storeState();
// Function factory
export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}


// const plantState = () => {
//   let currentPlants = [];
//   return(plantObj) => {
//     currentPlants.push(plantObj);
//   };
// };

// const plant = { soil: 0, light: 0, water: 0, plantId: 0 };


 // funtion that takes in a function updates its own state objecttion that takes in a function updates its own state objecttion that takes in a function updates its own state objecttion that updates its own state object    

























































// Functions for our factory 

//export const blueFood = changeState("soil")(5)
// const greenFood = changeState("soil")(10)
// const yuckyFood = changeState("soil")(-5)





