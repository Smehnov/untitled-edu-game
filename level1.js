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
    var span_result = document.getElementById('result')
    var found_link = false
    for (let i = 0; i < dot_links.length; i++) {
        arr = dot_links[i];
        console.log(arr);
        
        if(arr[1]==output_input_dot){
            found_link = true
            var html_brick = arr[0].findAncestor('.html_brick')
            if(html_brick.findOne(".input_text").text()=="first_post.html"){
                span_result.style.color="green"
                document.getElementById('next_level_but').classList.add("active_next_level_but") 
                span_result.innerHTML = "Читатель смог получить пост Васи, правда этим читателем был сам Вася("
                is_level_completed=true
                // УРОВЕНЬ ПРОЙДЕН
                
            }else{
                span_result.style.color="red"
                span_result.innerHTML = "Файл first_post.html не передан в Server Response <br>"
            }
            
            
        }
        
    }
    if(!found_link){
        span_result.style.color="red"
        span_result.innerHTML = "Ничего не передано в Server Response <br>"
    }
    
     
}
// add the shape to the layer

document.getElementById('next_level_but').onclick = ()=>{
    if(is_level_completed==true){
        window.location.href="./level2.html";
    }
}



stage.add(layer);