var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage(stage_template);
var layer = new Konva.Layer();
var cur_level = 3

document.getElementById("new_html_block_but").onclick = ()=>{
    spawn_html_brick()  
    
}

document.getElementById("new_if_block_but").onclick = ()=>{
    spawn_if_brick()  
    
}

spawn_output_brick()
spawn_output_brick()
spawn_input_brick()






document.getElementById('next_level_but').onclick = ()=>{
    if(is_level_completed==true){
        window.location.href="./level4.html";
    }
}

document.getElementById('last_level_but').onclick = ()=>{
        window.location.href="./level2.html";
}



stage.add(layer);
