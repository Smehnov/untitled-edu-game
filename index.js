var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage({
  container: 'container',
  width: width,
  height: height
});

var layer = new Konva.Layer();

var rect1 = new Konva.Rect(block_template);
// add the shape to the layer
layer.add(rect1);



// add the layer to the stage
stage.add(layer);