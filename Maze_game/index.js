const {Engine, Render, Runner, World, Bodies
} = Matter; 

const cells = 3; 
const width = 600;
const height = 600

const engine = Engine.create(); //
const {world} = engine; //we create an engine and we create world where are all the shapes
const render = Render.create({ //it shows some content on the screen
    element: document.body, //here we tell where to render representation of our world, in this case in body. It creates a canvas.
    engine: engine,
    options: { //specifying canvas object
        width, //assigned the size of canvas 
        height,
        wireframes: true //it creates colourful shapes not black/white if it false
    }
});

Render.run(render); // here world starts working and it is drawn
Runner.run(Runner.create(), engine); // coordinates all the changes from states 

//Walls
const walls = [
    Bodies.rectangle(width/2, 0, width, 40, {isStatic: true}),
    Bodies.rectangle(width/2, height,width,40, {isStatic: true}),
    Bodies.rectangle(0, height/2, 40, height, {isStatic: true}),
    Bodies.rectangle(width, height/2, 40, height, {isStatic: true})
];

World.add(world, walls)

//Maze generation

const grid = Array(cells)
.fill(null)
.map(() => Array(cells).fill(false));

const verticals = Array(cells)
    .fill(null)
    .map(() => Array(cells-1).fill(false));

const horizontals = Array(cells-1)
    .fill(null)
    .map(()=> Array(cells).fill(false));

