var stage_template = {
  container: 'container',
  width: window.innerWidth,
  height: window.innerHeight,
  dragable:true
}

var block_template = {
    x: 20,
    y: 20,
    width: 100,
    height: 50,
    fill: '#00D2FF',
    stroke: 'black',
    strokeWidth: 4,
    shadowOffsetX : 5,
    shadowOffsetY : 3,
    shadowBlur : 20,
    opacity : 0.5,
    cornerRadius: [5, 5, 5, 5]
  }

var arrow_template = {
  x: 140,
  y: 180,
  points: [10, 235, 100, 235],
  pointerLength: 20,
  pointerWidth: 20,
  fill: 'white',
  stroke: 'black',
  strokeWidth: 4,
  id: 'arrow'
}  
