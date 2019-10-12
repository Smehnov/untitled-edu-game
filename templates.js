var stage_template = {
  container: 'container',
  width: window.innerWidth,
  height: window.innerHeight,
  draggable:true
}

var if_group_template = {
  x:0,
  y:0,
  draggable: true
}  

var block_template = {
    x: 20,
    y: 20,
    width: 200,
    height: 100,
    fill: '#6495ed',
    stroke: 'black',
    strokeWidth: 4,
    shadowOffsetX : 3,
    shadowOffsetY : 3,
    shadowBlur : 20,
    opacity : 1,
    cornerRadius: [5, 5, 5, 5]
  }

var if_text_template = {
  x: 50,
  y: 50,
  text: 'Simple Text',
  fontSize: 30,
  fontFamily: 'Calibri',
  fill: 'green'
}

var dot_input_template = {
  x:20,
  y:67,
  radius: 10,
  fill: 'purple',
  stroke: 'black',
  strokeWidth: 2
 }

var dot_output_true_template = {
  x:220,
  y:45,
  radius: 10,
  fill: 'green',
  stroke: 'black',
  strokeWidth: 2
}

var dot_output_false_template = {
  x:220,
  y:90,
  radius: 10,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 2
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
