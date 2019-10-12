var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage(stage_template);
var layer = new Konva.Layer();

document.getElementById("new_html_block_but").onclick = ()=>{
    spawn_html_brick()  
    
}

document.getElementById("new_if_block_but").onclick = ()=>{
    spawn_if_brick()  
    
}

spawn_output_brick()








document.getElementById('next_level_but').onclick = ()=>{
    if(is_level_completed==true){
        window.location.href="./level3.html";
    }
}



stage.add(layer);
