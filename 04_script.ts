// custom types
// interfaces are similar

type Point = {
  x: number;
  y: number;
  getPoint: () => string
};

const setCoordinate = (pt: Point) => {
  console.log(`x coordinate is ${pt.x}`);
  console.log(`y coordinate is ${pt.y}`);
};

setCoordinate({ x: 5, y: 5, getPoint: ()=>"" });
