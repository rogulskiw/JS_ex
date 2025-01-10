const {Engine, Render, Runner, World, Bodies} = Matter; 

const engine = Engine.create(); //
const {world} = engine; //we create an engine and we create world where are all the shapes
const render = Render.create({ //it shows some content on the screen
    element: document.body, //here we tell where to render representation of our world, in this case in body. It creates a canvas.
    engine: engine,
    options: { //specifying canvas object
        width: 800, //assigned the size of canvas 
        height: 600
    }
});

Render.run(render); // here world starts working and it is drawn
Runner.run(Runner.create(), engine); // coordinates all the changes from states 

const shape = Bodies.rectangle(200, 200, 50, 50, { //creating a shape doesn't mean they will show up on the screen. Two first numbers position, the last two - size
    isStatic: true //that means that we want to show the shape and NOT to move
});
World.add(world, shape); //passing created object -> here is created the object