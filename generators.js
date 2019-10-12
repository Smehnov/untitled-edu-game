function generate_if(){
    

    var brick_group = new Konva.Group(if_group_template)
    var brick_block = new Konva.Rect(block_template)
    var brick_dot_output_true= new Konva.Circle(dot_output_true_template)
    var brick_dot_output_false= new Konva.Circle(dot_output_false_template)
    var brick_dot_input= new Konva.Circle(dot_input_template)

    brick_group.add(brick_block, brick_dot_input,brick_dot_output_true, brick_dot_output_false)
    

    var if_brick = {
    
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