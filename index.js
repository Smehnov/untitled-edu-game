var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage(stage_template);

var layer = new Konva.Layer();

document.getElementById("new_if_block_but").onclick = ()=>{
    spawn_if_brick()
    layer.draw()
}



// add the shape to the layer


stage.add(layer);