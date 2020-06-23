// Problem #3
// Compose a function called throw ().The throw () function should determine the distance and speed a battle robot can throw a spear.This function should be unary, so you will need to use currying.

//   Next, add the throw () function to multiple battle robots.A result might look something like this:

// > battleRobot1.throw();
// "The battle robot throws the spear 100 yards at 200 miles per hour!"

const throws = function() {
  return function(yards) {
    return function(mph) {
      return `The Battle robot throws the spear ${yards} yards at ${mph} miles per hour!`
    };
  };
}

const robot1 = throws();
robot1(100)(200);

const robotThrow = function(yards) {
  return function(mph) {
    const obj = {
      throws: function() {
        return `The Battle robot throws the spear ${yards} yards at ${mph} miles per hour!`;
      }
    }
    return obj
  }
}

const robot2 = robotThrow(100)(200)
robot2.throws()