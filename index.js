var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage(stage_template);

var layer = new Konva.Layer();

var rect1 = {
    
    brick:  new Konva.Rect(block_template),
    type: "IF",
    inputs:['inp1'],
    outputs:['true', 'false']

}

var rect2 = {
    
    brick:  new Konva.Rect(block_template),
    type: "IF",
    inputs:['inp1'],
    outputs:['true', 'false']
 }

var links = [


]
// add the shape to the layer



var test_arrow = new Konva.Arrow(arrow_template);
layer.add(rect1.brick);



// add the layer to the stage
stage.add(layer);