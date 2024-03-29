var stage_template = {
  container: 'container',
  width: (window.innerWidth*0.75),
  height: (window.innerHeight*0.85),
  draggable:false,
  dragBoundFunc: (pos) =>{
    return {
      x: 0,
      y: pos.y
    }
  }
} 

var if_group_template = {
  name:'if_brick',
  x:40,
  y:160,
  draggable: true
  
}  

var block_template = {
    name:'block',
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
  dragBoundFunc: function(pos) {
    var newX = pos.x < 0 ? 0 : pos.x;
    var newX = newX > 1150? 1150 : newX;
    return {
      x: newX,
      y: pos.y
    };
  }
}

var dot_input_template = {
  x:123,
  y:20,
  radius: 10,
  fill: DOT_COLOR,
  stroke: 'black',
  strokeWidth: 2,
  name: 'dot_input'
 }

var dot_output_true_template = {
  x:175,
  y:118,
  radius: 10,
  fill: DOT_COLOR,
  stroke: 'black',
  strokeWidth: 2,
  name: 'dot_output_true'
}

var dot_output_false_template = {
  x:70,
  y:118,
  radius: 10,
  fill: DOT_COLOR,
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
  name:'block',
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
  x: -10,
  y: 15,  
  text: 'example.html',
  fontFamily: 'Calibri',
  fontSize: 20,
  fill: 'black',
  name: 'input_text'
}  

var html_text_template = {
  x: 62,
  y: 35,
  text: 'GetHtmlPage',
  fontSize: 23,
  fontFamily: 'Calibri',
  fill: 'black',
  fontStyle: 'bold'
}

var dot_output_template = {
  x:120,
  y:118,
  radius: 10,
  fill: DOT_COLOR,
  stroke: 'black',
  strokeWidth: 2,
  name: 'dot_output'
}

var html_group_template = {
  name:"html_brick",
  x:540,
  y:160,
  draggable: true,
  dragBoundFunc: function(pos) {
    var newX = pos.x < 0 ? 0 : pos.x;
    var newX = newX > 1150? 1150 : newX;
    return {
      x: newX,
      y: pos.y
    };
  }
}  


var output_group_template = {
  name: "output_brick",
  x:260,
  y:460,
  draggable: true,
  dragBoundFunc: function(pos) {
    var newX = pos.x < 0 ? 0 : pos.x;
    var newX = newX > 1150? 1150 : newX;
    return {
      x: newX,
      y: pos.y
    };
  }
}  

var output_block_template = {
  name:'block',
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

var output_text_template = {
  x: 25,
  y: 35,
  text: 'SERVER RESPONSE',
  fontSize: 20,
  fontFamily: 'Calibri',
  fill: 'black',
  fontStyle: 'bold'
}

var input_group_template = {
  name: "input_brick",
  x:600,
  y:20,
  draggable: true,
  dragBoundFunc: function(pos) {
    var newX = pos.x < 0 ? 0 : pos.x;
    var newX = newX > 1150? 1150 : newX;
    return {
      x: newX,
      y: pos.y
    };
  }
}  

var input_block_template = {
  name:'block',
  x: 20,
  y: 20,
  width: 200,
  height: 100,
  fill: INPUT_BLOCK_COLOR,
  stroke: 'black',
  strokeWidth: 4,
  shadowOffsetX : 3,
  shadowOffsetY : 3,
  shadowBlur : 20,
  opacity : 1,
  cornerRadius: [5, 5, 5, 5]
}

var input_text_template = {
  x: 55,
  y: 35,
  text: 'USER REQUEST',
  fontSize: 20,
  fontFamily: 'Calibri',
  fill: 'black',
  fontStyle: 'bold'
}

var db_group_template = {
  name: "db_brick",
  x:0,
  y:260,
  draggable: true,
  dragBoundFunc: function(pos) {
    var newX = pos.x < 0 ? 0 : pos.x;
    var newX = newX > 1150? 1150 : newX;
    return {
      x: newX,
      y: pos.y
    };
  }
}

var db_block_template = {
  name:'block',
  x: 20,
  y: 20,
  width: 900,
  height: 150,
  fill: DOT_OUTPUT_COLOR,
  stroke: 'black',
  strokeWidth: 4,
  shadowOffsetX : 3,
  shadowOffsetY : 3,
  shadowBlur : 20,
  opacity : 1,
  cornerRadius: [5, 5, 5, 5]
}

var db_select_text_template = {
  x: 25,
  y: 85,
  text: 'SELECT',
  fontSize: 24,
  fontFamily: 'Calibri',
  fill: 'black',
  fontStyle: 'bold'
}

var block_text_1_template = {
  name:'block',
  x: 15,
  y: 70,
  width: 120,
  height: 50,
  fill: IF_BLOCK_COLOR,
  stroke: 'black',
  strokeWidth: 4,
  cornerRadius: [5, 5, 5, 5]
}

var text_text1_template = {
  name:'input_text',
  x: 18,
  y: 85,
  text: '<>',
  fontSize: 24,
  fontFamily: 'Calibri',
  fill: 'white',
  fontStyle: 'bold'
}

var text1_group_template ={
  x:120,
  y:0
}

var db_from_text_template = {
  x: 260,
  y: 85,
  text: 'FROM',
  fontSize: 24,
  fontFamily: 'Calibri',
  fill: 'black',
  fontStyle: 'bold'
}


var block_text_2_template = {
  
  name:'block',
  x: 10,
  y: 70,
  width: 120,
  height: 50,
  fill: IF_BLOCK_COLOR,
  stroke: 'black',
  strokeWidth: 4,
  cornerRadius: [5, 5, 5, 5]
}

var text_text2_template = {
  name:'input_text',
  x: 15,
  y: 85,
  text: '',
  fontSize: 18,
  fontFamily: 'Calibri',
  fill: 'white',
  fontStyle: 'bold'
}

var text2_group_template ={
  x:330,
  y:0
}

var db_where_text_template = {
  x: 470,
  y: 85,
  text: 'WHERE',
  fontSize: 24,
  fontFamily: 'Calibri',
  fill: 'black',
  fontStyle: 'bold'
}



var block_text_3_template = {
  name:'block',
  x: 10,
  y: 70,
  width: 120,
  height: 50,
  fill: IF_BLOCK_COLOR,
  stroke: 'black',
  strokeWidth: 4,
  cornerRadius: [5, 5, 5, 5]
}

var text_text3_template = {
  name:'input_text',
  x: 18,
  y: 85,
  text: '<>',
  fontSize: 24,
  fontFamily: 'Calibri',
  fill: 'white',
  fontStyle: 'bold'
}

var text3_group_template ={
  x:560,
  y:0
}

var db_equal_text_template = {
  x: 707,
  y: 83,
  text: '=',
  fontSize: 30,
  fontFamily: 'Calibri',
  fill: 'black',
  fontStyle: 'bold'
}

var block_text_4_template = {
  name:'block',
  x: 10,
  y: 70,
  width: 120,
  height: 50,
  fill: IF_BLOCK_COLOR,
  stroke: 'black',
  strokeWidth: 4,
  cornerRadius: [5, 5, 5, 5]
}

var text_text4_template = {
  name:'input_text',
  x: 15,
  y: 85,
  text: '',
  fontSize: 24,
  fontFamily: 'Calibri',
  fill: 'white',
  fontStyle: 'bold'
}

var text4_group_template ={
  x:730,
  y:0
}

var db_dot2_input_template = {
  x:400,
  y:20,
  radius: 10,
  fill: DOT_COLOR,
  stroke: 'black',
  strokeWidth: 2,
  name: 'dot_input2'
}

var db_dot4_input_template = {
  x:800,
  y:20,
  radius: 10,
  fill: DOT_COLOR,
  stroke: 'black',
  strokeWidth: 2,
  name: 'dot_input4'
}


var base_group_template = {
  name: "base_brick",
  x:280,
  y:20,
  draggable: true,
  dragBoundFunc: function(pos) {
    var newX = pos.x < 0 ? 0 : pos.x;
    var newX = newX > 1150? 1150 : newX;
    return {
      x: newX,
      y: pos.y
    };
  }
}  

var base_block_template = {
  name:'block',
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

var base_text_template = {
  x: 60,
  y: 55,
  text: 'DATABASE1',
  fontSize: 20,
  fontFamily: 'Calibri',
  fill: 'black',
  fontStyle: 'bold'
}

var base_dot_output_template = {
  x:120,
  y:118,
  radius: 10,
  fill: DOT_COLOR,
  stroke: 'black',
  strokeWidth: 2,
  name: 'dot_output'
}

var db_dot_output_template = {
  x:450,
  y:170,
  radius: 10,
  fill: DOT_COLOR,
  stroke: 'black',
  strokeWidth: 2,
  name: 'dot_output'
}