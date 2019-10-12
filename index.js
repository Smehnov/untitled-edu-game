var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage(stage_template);

var layer = new Konva.Layer();

/*var rect1 = {
    
    brick:  new Konva.Rect(block_template),
    type: "IF",
    inputs:{'inp1':''

},
    outputs:{
     'true':'',
     'false': ''
    }

}

var rect2 = {
    
    brick:  new Konva.Rect(block_template),
    type: "IF",
    inputs:{'inp1':''

},
    outputs:{
     'true':'',
     'false': ''
    }

}
*/


// add the shape to the layer
var if1 = generate_if(124)
var if2 = generate_if(156)
layer.add(if1.brick);
layer.add(if2.brick);

//var test_arrow = new Konva.Arrow(arrow_template);
//var test_dot = new Konva.Circle(dot_template)
//layer.add(test_dot)
//layer.add(test_arrow);



// add the layer to the stage
stage.add(layer);