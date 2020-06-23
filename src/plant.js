// This function stores our state.
export const storeState = () => {
  let currentState = {};
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

// Functions for our factory 

//export const blueFood = changeState("soil")(5)
// const greenFood = changeState("soil")(10)
// const yuckyFood = changeState("soil")(-5)



