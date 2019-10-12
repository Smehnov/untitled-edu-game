var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage(stage_template);
var layer = new Konva.Layer();

document.getElementById("new_html_block_but").onclick = ()=>{
    spawn_html_brick()  
    
}

spawn_html_brick()

// add the shape to the layer


stage.add(layer);