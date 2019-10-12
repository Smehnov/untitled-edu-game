var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage(stage_template);

var layer = new Konva.Layer();

var rect1 = {
    
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


var links = [


]
// add the shape to the layer
layer.add(rect1.brick);


var test_arrow = new Konva.Arrow(arrow_template);
var test_dot = new Konva.Circle(dot_template)
layer.add(test_dot)
layer.add(test_arrow);



// add the layer to the stage
stage.add(layer);