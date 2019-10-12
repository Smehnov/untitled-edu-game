function generate_if(id){
    

    var brick_group = new Konva.Group(if_group_template)
    var brick_block = new Konva.Rect(block_template)
    var brick_text = new Konva.Text(if_text_template)
    var brick_dot_output_true= new Konva.Circle(dot_output_true_template)
    var brick_dot_output_false= new Konva.Circle(dot_output_false_template)
    var brick_dot_input= new Konva.Circle(dot_input_template)


    brick_dot_input.on('click', ()=>{
        if((curent_state.choosed_obj != brick_dot_input) && (current_state.choosed_obj_type !='dot')){
            curent_state.choosed_obj = brick_dot_input
            curent_state.choosed_obj_type = 'dot'
            brick_dot_input.fill('red')
            layer.draw()
        }else if(current_state.choosed_obj == brick_dot_input){
            curent_state.choosed_obj = null
            curent_state.choosed_obj_type = null
            brick_dot_input.fill('red')
            layer.draw()
        }
        
    })

    

    brick_group.add(brick_block, brick_text, brick_dot_input,brick_dot_output_true, brick_dot_output_false)
    

    var if_brick = {
        id:id,
        brick:  brick_group,
        type: "IF",
        inputs:{'inp1':''
    
        },
        outputs:{
         'true':'',
         'false': ''
        }
    
    }


    return if_brick
}