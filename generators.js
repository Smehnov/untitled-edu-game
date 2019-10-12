function generate_if(id){
    
    var brick_group = new Konva.Group(if_group_template)
    var brick_block = new Konva.Rect(block_template)
    var brick_text = new Konva.Text(if_text_template)
    var brick_dot_output_true= new Konva.Circle(dot_output_true_template)
    var brick_dot_output_false= new Konva.Circle(dot_output_false_template)
    var brick_dot_input= new Konva.Circle(dot_input_template)
    var block_input_text = new Konva.Text(input_text_template)
    var brick_input_label = new Konva.Label(input_label_template).add(block_input_text)
    

    brick_dot_input.on('click', ()=>{
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
            
            current_state.choosed_obj.fill(DOT_INPUT_COLOR)
            current_state.choosed_obj = null
            current_state.choosed_obj_type = null
            layer.draw()
        }
    })

    brick_group.add(brick_block, brick_text, brick_dot_input,brick_dot_output_true, brick_dot_output_false, brick_input_label)
    
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

function generate_arrow(){

}