const paint = function() {
  const object = {
    paints: function(color) {
      return `Paints ${color}!`
    }
  }
  return object;
}

const painter1 = paint();
painter1.paints("green");