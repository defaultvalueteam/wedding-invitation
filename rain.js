const button = document.querySelector('button')
const width = window.innerWidth
const height = window.innerHeight

const runRice = () => {
  button.style.display = 'none'

  // module aliases
  const {
    Engine,
    Render,
    Bodies,
    World,
    MouseConstraint,
    Composites,
    Query,
  } = Matter

  // what is the width and height of the page
  const w = window.innerWidth
  const h = window.innerHeight

  const emoj = ['😆', '😍', '🤩']
  // create an engine
  const engine = Engine.create()

  // create a renderer
  const renderer = Render.create({
    element: document.getElementById('rice'),
    engine: engine,
    options: {
      height: h,
      width: w,
      background: '#000000',
      wireframes: false,
      pixelRatio: window.devicePixelRatio,
    },
  })

  const createShape = (x, y) => {
    return Bodies.rectangle(x, y, 20, 20, {
      render: {
        sprite: {
          texture: 'https://i.ibb.co/X4tm54x/smiley.png',
          xScale: 0.5,
          yScale: 0.5,
        },
      },
    })
  }

  const emojis = Composites.stack(50, 50, 15, 5, 40, 40, function (x, y) {
    return createShape(x, y)
  })

  const wallOptions = {
    isStatic: true,
    render: {
      visible: false,
    },
  }

  const ground = Bodies.rectangle(w / 2, h + 50, w + 100, 100, wallOptions)
  const ceiling = Bodies.rectangle(w / 2, -50, w + 100, 100, wallOptions)
  const leftWall = Bodies.rectangle(-50, h / 2, 100, h + 100, wallOptions)
  const rightWall = Bodies.rectangle(w + 50, h / 2, 100, h + 100, wallOptions)

  World.add(engine.world, [emojis, ground, ceiling, leftWall, rightWall])

  // run both the engine, and the renderer
  Engine.run(engine)
  Render.run(renderer)
}
