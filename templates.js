var stage_template = {
  container: 'container',
  width: window.innerWidth,
  height: window.innerHeight,
  dragable:true
}

var block_template = {
    x: 20,
    y: 20,
    width: 200,
    height: 100,
    fill: '#00D2FF',
    stroke: 'black',
    strokeWidth: 4,
    shadowOffsetX : 5,
    shadowOffsetY : 3,
    shadowBlur : 20,
    opacity : 0.5,
    cornerRadius: [5, 5, 5, 5]
  }

var dot_input_template = {
  x:40,
  y:60,
  radius: 9,
  fill: 'purple',
  stroke: 'black',
  strokeWidth: 3
 }

var dot_output_true_template = {
  x:200,
  y:40,
  radius: 9,
  fill: 'green',
  stroke: 'black',
  strokeWidth: 3
}

var dot_output_false_template = {
  x:200,
  y:80,
  radius: 9,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 3
}

var arrow_template = {
  x: 140,
  y: 180,
  points: [10, 235, 200, 235],
  pointerLength: 15,
  pointerWidth: 15,
  fill: 'black',
  stroke: 'black',
  strokeWidth: 5,
  id: 'arrow'
}  
