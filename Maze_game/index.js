const {Engine, Render, Runner, World, Bodies, MouseConstraint, Mouse} = Matter; 

const width = 800;
const height = 600

const engine = Engine.create(); //
const {world} = engine; //we create an engine and we create world where are all the shapes
const render = Render.create({ //it shows some content on the screen
    element: document.body, //here we tell where to render representation of our world, in this case in body. It creates a canvas.
    engine: engine,
    options: { //specifying canvas object
        width, //assigned the size of canvas 
        height,
        wireframes: false //it creates colourful shapes not black/white
    }
});

Render.run(render); // here world starts working and it is drawn
Runner.run(Runner.create(), engine); // coordinates all the changes from states 

World.add(world, MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas)
    })
);

//Walls
const walls = [
    Bodies.rectangle(400, 0, 800, 40, {isStatic: true}),
    Bodies.rectangle(400, 600,800,40, {isStatic: true}),
    Bodies.rectangle(0, 300, 40, 600, {isStatic: true}),
    Bodies.rectangle(800, 300, 40, 600, {isStatic: true})
];

World.add(world, walls)

//Random Shapes
for(let i=0; i< 50; i++){
    if(Math.random() > 0.5 ){
        World.add(world, Bodies.rectangle(Math.random() * width, Math.random() * height,50,50))
    } else {
        World.add(world, Bodies.circle(Math.random() * width, Math.random() * height, 35, {
            render: {
                fillStyle: 'red'
            }
        }))
    }
    
}
