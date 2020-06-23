// Problem #2
// Compose a function called sound().You should be able to add the following functionality to the objects listed:

// > faucet.sound()
// "Drip drip drip."
//   > oldCar.sound()
// "Grumble grumble"
//   > sleepyBear.sound()
// "Grrr...yawn"

const sound = function() {
  const obj = {
    noise: function(sounds){
      return `${sounds}`
    }
  }
  return obj;
}