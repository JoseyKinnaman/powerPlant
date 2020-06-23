// Problem #4
// First use closures to create three dance moves. For instance, a dancer should be able to do the following:

// > dancer.samba()
// "The dancer sambas!"
// > dancer.tango()
// "The dancer tangos!"
// Then add the dance moves to a dancer.


const dance = (dancer) => {
  const str = `${dancer} can do the `;
  const obj = {
    samba: () => {
      return str + "Sambas";
    },
    tango: () => {
      return str + "Tango";
  },
    truffleShuffle: () => {
      return str + "Truffle Shuffle";
    }
  };
return obj;
};

const austin = canDance("Austin")