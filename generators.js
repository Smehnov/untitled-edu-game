
function generate_if(id){
    
    var brick_group = new Konva.Group(if_group_template)
    var brick_block = new Konva.Rect(block_template)
    var brick_text = new Konva.Text(if_text_template)
    var brick_dot_output_true= new Konva.Circle(dot_output_true_template)
    var brick_dot_output_false= new Konva.Circle(dot_output_false_template)
    var brick_dot_input= new Konva.Circle(dot_input_template)
    var block_input_text = new Konva.Text(input_text_template)
    var brick_input_label = new Konva.Label(input_label_template).add(block_input_text)
    
    //brick_dot_input click
    brick_dot_input.on('click', ()=>{
        console.log(1);
        
        if((current_state.choosed_obj != brick_dot_input) && (current_state.choosed_obj_type !='dot')){
            current_state.choosed_obj = brick_dot_input
            current_state.choosed_obj_type = 'dot'
            brick_dot_input.fill(CHOOSED_DOT_COLOR)
            layer.draw()
    
        }else if(current_state.choosed_obj == brick_dot_input){
            current_state.choosed_obj = null
            current_state.choosed_obj_type = null
            brick_dot_input.fill(DOT_INPUT_COLOR)
            layer.draw()
           
        }else if((current_state.choosed_obj != brick_dot_input)&&(current_state.choosed_obj_type=='dot')){
            //Связываем две точки
            
            if(!(is_dot_in_dot_links(brick_dot_input) || is_dot_in_dot_links(current_state.choosed_obj))){
                
                
                dot_links.push([current_state.choosed_obj, brick_dot_input])
                console.log(dot_links);
                update_arrows()
            }
            current_state.choosed_obj.fill(DOT_INPUT_COLOR)
            current_state.choosed_obj = null
            current_state.choosed_obj_type = null
            layer.draw()
        }
    })

    
    //brick_dot_output_false click
    brick_dot_output_false.on('click', ()=>{
        console.log(1);
        
        if((current_state.choosed_obj != brick_dot_output_false) && (current_state.choosed_obj_type !='dot')){
            current_state.choosed_obj = brick_dot_output_false
            current_state.choosed_obj_type = 'dot'
            brick_dot_output_false.fill(CHOOSED_DOT_COLOR)
            layer.draw()
    
        }else if(current_state.choosed_obj == brick_dot_output_false){
            current_state.choosed_obj = null
            current_state.choosed_obj_type = null
            brick_dot_output_false.fill(DOT_INPUT_COLOR)
            layer.draw()
           
        }else if((current_state.choosed_obj != brick_dot_output_false)&&(current_state.choosed_obj_type=='dot')){
            //Связываем две точки
            
            if(!(is_dot_in_dot_links(brick_dot_output_false) || is_dot_in_dot_links(current_state.choosed_obj))){
                
                
                dot_links.push([current_state.choosed_obj, brick_dot_output_false])
                console.log(dot_links);
                update_arrows()
            }
            current_state.choosed_obj.fill(DOT_INPUT_COLOR)
            current_state.choosed_obj = null
            current_state.choosed_obj_type = null
            layer.draw()
        }
    })



    //brick_dot_output_true click
    brick_dot_output_true.on('click', ()=>{
        console.log(1);
        
        if((current_state.choosed_obj != brick_dot_output_true) && (current_state.choosed_obj_type !='dot')){
            current_state.choosed_obj = brick_dot_output_true
            current_state.choosed_obj_type = 'dot'
            brick_dot_output_true.fill(CHOOSED_DOT_COLOR)
            layer.draw()
    
        }else if(current_state.choosed_obj == brick_dot_output_true){
            current_state.choosed_obj = null
            current_state.choosed_obj_type = null
            brick_dot_output_true.fill(DOT_INPUT_COLOR)
            layer.draw()
           
        }else if((current_state.choosed_obj != brick_dot_output_true)&&(current_state.choosed_obj_type=='dot')){
            //Связываем две точки
            
            if(!(is_dot_in_dot_links(brick_dot_output_true) || is_dot_in_dot_links(current_state.choosed_obj))){
                
                
                dot_links.push([current_state.choosed_obj, brick_dot_output_true])
                console.log(dot_links);
                update_arrows()
            }
            current_state.choosed_obj.fill(DOT_INPUT_COLOR)
            current_state.choosed_obj = null
            current_state.choosed_obj_type = null
            layer.draw()
        }
    })




    brick_group.add(brick_block, brick_text, brick_dot_input,brick_dot_output_true, brick_dot_output_false, brick_input_label)
    

    brick_group.on('dragend', ()=>{
        update_arrows()
    })
    var if_brick = {
        id:id,
        brick:  brick_group,
        type: "IF",
        inputs:{'inp1':{
            id: (id+'inp1'),
            obj:brick_dot_input
        }
    
        },
        outputs:{
         'true':{
             id: (id+'true'),
             obj:brick_dot_output_true
         },
         'false': {
            id: (id+'false'),
            obj:brick_dot_output_false
         }
        }
    
    }

    return if_brick
}

function generateArrow(x1, y1, x2, y2){
    var arrow = new Konva.Arrow(arrow_template)
    arrow.points([x1, y1, x2, y2])
    layer.add(arrow)
    return arrow
}

function update_arrows(){
    for (var i = 0; i < arrows_list.length; i++) {
    arrows_list[i].remove()
    }
    arrows_list = []
    for (var i = 0; i < dot_links.length; i++) {
       var dot1 = dot_links[i][0]
       var dot2 = dot_links[i][1]
       var dot1_coords = dot1.absolutePosition()
       var dot2_coords = dot2.absolutePosition()
       arrows_list.push(generateArrow(dot1_coords.x, dot1_coords.y, dot2_coords.x, dot2_coords.y))
        layer.draw()
    }
}

function is_dot_in_dot_links(dot){
    
    for (let i = 0; i < dot_links.length; i++) {
        var arr = dot_links[i];
        if ((arr[0]==dot) || (arr[1]==dot)){
            return true
        }
    }

    return false
}