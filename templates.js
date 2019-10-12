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
    opacity : 0.6,
    cornerRadius: [5, 5, 5, 5]
  }

var if_group_template = {
  x:0,
  y:0,
  dragable: true
}  

var dot_input_template = {
  x:37,
  y:67,
  radius: 9,
  fill: 'purple',
  stroke: 'black',
  strokeWidth: 3
 }

var dot_output_true_template = {
  x:205,
  y:45,
  radius: 9,
  fill: 'green',
  stroke: 'black',
  strokeWidth: 3
}

var dot_output_false_template = {
  x:205,
  y:90,
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
