var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage(stage_template);
var layer = new Konva.Layer();

document.getElementById("new_html_block_but").onclick = ()=>{
    spawn_html_brick()  
    
}
spawn_output_brick()


document.getElementById("run_level_but").onclick = ()=>{
    var res = false;
    var output = layer.findOne('.output_brick')
    var output_input_dot = output.findOne('.dot_input')
    console.log(output_input_dot);
    for (let i = 0; i < dot_links.length; i++) {
        arr = dot_links[i];
        console.log(arr);
        
        if(arr[1]==output_input_dot){
            var html_brick = arr[0].findAncestor('.html_brick')
            if(html_brick.findOne(".input_text").text()=="first_post.html"){
                console.log(1);
                
            }
            
            
        }
        
    }
    
     
}
// add the shape to the layer


stage.add(layer);