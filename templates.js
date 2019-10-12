var stage_template = {
  container: 'container',
  width: (window.innerWidth*0.75),
  height: (window.innerHeight*0.85),
  draggable:true,
  dragBoundFunc: (pos) =>{
    return {
      x: 0,
      y: pos.y
    }
  }
} 

var if_group_template = {
  x:40,
  y:160,
  draggable: true
}  

var block_template = {
    x: 20,
    y: 20,
    width: 200,
    height: 100,
    fill: IF_BLOCK_COLOR,
    stroke: 'black',
    strokeWidth: 4,
    shadowOffsetX : 3,
    shadowOffsetY : 3,
    shadowBlur : 20,
    opacity : 1,
    cornerRadius: [5, 5, 5, 5]
}

var input_label_template = {
  x: 80,
  y:50,
}

var input_text_template = {
  text: 'Simple label',
  fontFamily: 'Calibri',
  fontSize: 20,
  padding: 5,
  fill: 'black',
  name: 'input_text'
}  

var if_text_template = {
  x: 40,
  y: 50,
  text: 'IF',
  fontSize: 35,
  fontFamily: 'Calibri',
  fill: 'black',
  fontStyle: 'bold',
  stroke: 'white',
  strokeWidth: 0.5,
  shadowOffsetX : 1,
  shadowOffsetY : 1,
  shadowBlur : 10,
}

var dot_input_template = {
  x:120,
  y:20,
  radius: 10,
  fill: DOT_INPUT_COLOR,
  stroke: 'black',
  strokeWidth: 2,
  name: 'dot_input'
 }

var dot_output_true_template = {
  x:70,
  y:118,
  radius: 10,
  fill: DOT_OUTPUT_TRUE_COLOR,
  stroke: 'black',
  strokeWidth: 2,
  name: 'dot_output_true'
}

var dot_output_false_template = {
  x:175,
  y:118,
  radius: 10,
  fill: DOT_OUTPUT_FALSE_COLOR,
  stroke: 'black',
  strokeWidth: 2,
  name: 'dot_output_false'
}

var arrow_template = {
  x: 0,
  y: 0,
  points: [10, 235, 200, 235],
  pointerLength: 15,
  pointerWidth: 15,
  fill: 'black',
  stroke: 'black',
  strokeWidth: 5,
  id: 'arrow'
}  

var html_block_template = {
  x: 20,
  y: 20,
  width: 200,
  height: 100,
  fill: HTML_BLOCK_COLOR,
  stroke: 'black',
  strokeWidth: 4,
  shadowOffsetX : 3,
  shadowOffsetY : 3,
  shadowBlur : 20,
  opacity : 1,
  cornerRadius: [5, 5, 5, 5]
}

var html_input_text_template = {
  text: 'example.html',
  fontFamily: 'Calibri',
  fontSize: 18,
  padding: 5,
  fill: 'black',
  name: 'input_text'
}  

var html_text_template = {
  x: 40,
  y: 50,
  text: 'GetHtmlPage',
  fontSize: 18,
  fontFamily: 'Calibri',
  fill: 'black',
  fontStyle: 'bold',
  stroke: 'white',
  strokeWidth: 0.5,
  shadowOffsetX : 1,
  shadowOffsetY : 1,
  shadowBlur : 10,
}

var dot_output_template = {
  x:70,
  y:118,
  radius: 10,
  fill: DOT_OUTPUT_COLOR,
  stroke: 'black',
  strokeWidth: 2,
  name: 'dot_output'
}

var html_group_template = {
  x:40,
  y:160,
  draggable: true
}  
