const {
  Engine,
  Render,
  Bodies,
  World,
  MouseConstraint,
  Composites,
  Query,
} = Matter

const removeintro= () => {
  const button = document.querySelector('button')
  const text = document.querySelector('.dynamic__text__wrapper')
  button.style.display = 'none'
  text.style.display = 'none'
}

const createShape = (x, y) => {
  console.log(x, y)
  return Bodies.rectangle(x, y, 20, 20, {
    density: 0.0005,
    frictionAir: 0.05,
    restitution: 0.3,
    friction: 0.01,
    render: {
      sprite: {
        texture: 'https://i.ibb.co/X4tm54x/smiley.png',
        xScale: 0.5,
        yScale: 0.5,
        rotationAngle: Math.random(),
      },
    },
  })
}

function createEmojisStack() {
  const startingX = 50;
  const startingY = 50;
  const columns = 15;
  const rows = 5;
  const columnGap = 80;
  const rowGap = 40;
  const stack = Composites.stack(startingX, startingY, columns, rows, columnGap, rowGap, function (x, y) {
    return createShape(x, y)
  })
  return Composites.chain(stack, 0.5, 1, 1, 0.5)
}

const runRice = () => {
  removeintro();
  // module aliases

  // const emoj = ['😆', '😍', '🤩']


  const wallOptions = {
    isStatic: true,
    render: {
      visible: false,
    },
  }

  // what is the width and height of the page
  const canvasWidth = window.innerWidth
  const canvasHeight = window.innerHeight
  console.log(canvasWidth, canvasHeight)

  const ground = Bodies.rectangle(canvasWidth / 2, canvasHeight + 50, canvasWidth + 100, 100, wallOptions)
  const ceiling = Bodies.rectangle(canvasWidth / 2, -50, canvasWidth + 100, 100, wallOptions)
  const leftWall = Bodies.rectangle(-50, canvasHeight / 2, 100, canvasHeight + 100, wallOptions)
  const rightWall = Bodies.rectangle(canvasWidth + 50, canvasHeight / 2, 100, canvasHeight + 100, wallOptions)


  // create an engine
  const engine = Engine.create()

  let time = 0;
  const changeGravity = () => {
    time = time + 0.01;
    engine.world.gravity.x = Math.sin(time)
    engine.world.gravity.y = Math.cos(time)

    requestAnimationFrame(changeGravity)
  }

  World.add(engine.world, [createEmojisStack(), ground, ceiling, leftWall, rightWall])

  // create a renderer
  const renderer = Render.create({
    element: document.querySelector('.content__wrapper'),
    engine: engine,
    options: {
      height: canvasHeight,
      width: canvasWidth,
      background: '#000000',
      wireframes: false,
      pixelRatio: window.devicePixelRatio,
    },
  })
  // run both the engine, and the renderer
  // engine.gravity = {
  //   x: 0,
  //   y: 100000,
  //   scale: 0.001
  // }

  Engine.run(engine)
  Render.run(renderer)
  changeGravity()
}
