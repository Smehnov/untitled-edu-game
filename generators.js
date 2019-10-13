function get_brick_id(){
    return ++last_brick_id
}

function generate_base_brick(id){
    var brick_group = new Konva.Group(base_group_template)
    var brick_block = new Konva.Rect(base_block_template)
    var dot_output= new Konva.Circle(base_dot_output_template)
    var brick_name = new Konva.Text(base_text_template)

    brick_group.add(brick_block, dot_output, brick_name)

    dot_output.on('click', ()=>{
        console.log(1);
        
        if((current_state.choosed_obj != dot_output) && (current_state.choosed_obj_type !='dot')){
            current_state.choosed_obj = dot_output
            current_state.choosed_obj_type = 'dot'
            dot_output.fill(CHOOSED_DOT_COLOR)
            layer.draw()
    
        }else if(current_state.choosed_obj == dot_output){
            current_state.choosed_obj = null
            current_state.choosed_obj_type = null
            dot_output.fill(DOT_INPUT_COLOR)
            layer.draw()
           
        }else if((current_state.choosed_obj != dot_output)&&(current_state.choosed_obj_type=='dot')){
            //Связываем две точки
            
            if(!(is_dot_in_dot_links(dot_output) || is_dot_in_dot_links(current_state.choosed_obj))){
                
                
                dot_links.push([current_state.choosed_obj, dot_output])
                console.log(dot_links);
                update_arrows()
            }
            current_state.choosed_obj.fill(DOT_INPUT_COLOR)
            current_state.choosed_obj = null
            current_state.choosed_obj_type = null
            layer.draw()
        }
    })

    var base_brick = {
        id:id,
        brick:  brick_group,
        type: "BASE"
         
    }
    
    return base_brick
}

function generate_db_brick(id){
    var brick_group = new Konva.Group(db_group_template)
    var brick_block = new Konva.Rect(db_block_template)
    var select_text = new Konva.Text(db_select_text_template)
    var text1_text = new Konva.Text(text_text1_template)
    var text1_block = new Konva.Rect(block_text_1_template)
    var text1_group = new Konva.Group(text1_group_template)
    text1_text.align('center')
    text1_group.add(text1_block, text1_text)

    var text2_text = new Konva.Text(text_text2_template)
    var text2_block = new Konva.Rect(block_text_2_template)
    var text2_group = new Konva.Group(text2_group_template)
    text2_text.align('center')
    text2_group.add(text2_block, text2_text)
    var from_text = new Konva.Text(db_from_text_template)
    var where_text = new Konva.Text(db_where_text_template)
    var equal_text = new Konva.Text(db_equal_text_template)

    var text3_text = new Konva.Text(text_text3_template)
    var text3_block = new Konva.Rect(block_text_3_template)
    var text3_group = new Konva.Group(text3_group_template)
    text3_text.align('center')
    text3_group.add(text3_block, text3_text)

    var text4_text = new Konva.Text(text_text4_template)
    var text4_block = new Konva.Rect(block_text_4_template)
    var text4_group = new Konva.Group(text4_group_template)
    text4_text.align('center')
    text4_group.add(text4_block, text4_text)

    var dot2_input = new Konva.Circle(db_dot2_input_template)
    var dot4_input = new Konva.Circle(db_dot4_input_template)
    var dot_output = new Konva.Circle(db_dot_output_template)

    var text1={
        brick:text1_group
    }
    text1_group.on("click", ()=>{
        current_state.choosed_obj = text1_group
        current_state.choosed_obj_type = "brick"
        set_brick_menu(text1)
        
    })

    var text3={
        brick:text3_group
    }
    text3_group.on("click", ()=>{
        current_state.choosed_obj = text3_group
        current_state.choosed_obj_type = "brick"
        set_brick_menu(text3)
        
    })

    brick_group.add(brick_block, select_text, text1_group,text2_group, text3_group, text4_group, from_text, where_text, equal_text, dot2_input, dot4_input, dot_output)


    dot2_input.on('click', ()=>{
        console.log(1);
        
        if((current_state.choosed_obj != dot2_input) && (current_state.choosed_obj_type !='dot')){
            current_state.choosed_obj = dot2_input
            current_state.choosed_obj_type = 'dot'
            dot2_input.fill(CHOOSED_DOT_COLOR)
            layer.draw()
    
        }else if(current_state.choosed_obj == dot2_input){
            current_state.choosed_obj = null
            current_state.choosed_obj_type = null
            dot2_input.fill(DOT_INPUT_COLOR)
            layer.draw()
           
        }else if((current_state.choosed_obj != dot2_input)&&(current_state.choosed_obj_type=='dot')){
            //Связываем две точки
            
            if(!(is_dot_in_dot_links(dot2_input) || is_dot_in_dot_links(current_state.choosed_obj))){
                
                
                dot_links.push([current_state.choosed_obj, dot2_input])
                console.log(dot_links);
                update_arrows()
            }
            current_state.choosed_obj.fill(DOT_INPUT_COLOR)
            current_state.choosed_obj = null
            current_state.choosed_obj_type = null
            layer.draw()
        }
    })

    dot4_input.on('click', ()=>{
        console.log(1);
        
        if((current_state.choosed_obj != dot4_input) && (current_state.choosed_obj_type !='dot')){
            current_state.choosed_obj = dot4_input
            current_state.choosed_obj_type = 'dot'
            dot4_input.fill(CHOOSED_DOT_COLOR)
            layer.draw()
    
        }else if(current_state.choosed_obj == dot4_input){
            current_state.choosed_obj = null
            current_state.choosed_obj_type = null
            dot4_input.fill(DOT_INPUT_COLOR)
            layer.draw()
           
        }else if((current_state.choosed_obj != dot4_input)&&(current_state.choosed_obj_type=='dot')){
            //Связываем две точки
            
            if(!(is_dot_in_dot_links(dot4_input) || is_dot_in_dot_links(current_state.choosed_obj))){
                
                
                dot_links.push([current_state.choosed_obj, dot4_input])
                console.log(dot_links);
                update_arrows()
            }
            current_state.choosed_obj.fill(DOT_INPUT_COLOR)
            current_state.choosed_obj = null
            current_state.choosed_obj_type = null
            layer.draw()
        }
    })

    dot_output.on('click', ()=>{
        console.log(1);
        
        if((current_state.choosed_obj != dot_output) && (current_state.choosed_obj_type !='dot')){
            current_state.choosed_obj = dot_output
            current_state.choosed_obj_type = 'dot'
            dot_output.fill(CHOOSED_DOT_COLOR)
            layer.draw()
    
        }else if(current_state.choosed_obj == dot_output){
            current_state.choosed_obj = null
            current_state.choosed_obj_type = null
            dot_output.fill(DOT_INPUT_COLOR)
            layer.draw()
           
        }else if((current_state.choosed_obj != dot_output)&&(current_state.choosed_obj_type=='dot')){
            //Связываем две точки
            
            if(!(is_dot_in_dot_links(dot_output) || is_dot_in_dot_links(current_state.choosed_obj))){
                
                
                dot_links.push([current_state.choosed_obj, dot_output])
                console.log(dot_links);
                update_arrows()
            }
            current_state.choosed_obj.fill(DOT_INPUT_COLOR)
            current_state.choosed_obj = null
            current_state.choosed_obj_type = null
            layer.draw()
        }
    })


    brick_group.on('dragmove', ()=>{
        update_arrows()
    })

    

    var db_brick = {
        id:id,
        brick:  brick_group,
        type: "DB"
        
    }
    return db_brick
}

function generate_input_brick(id){
    var brick_group = new Konva.Group(input_group_template)
    var brick_block = new Konva.Rect(html_block_template)
    var brick_dot_output= new Konva.Circle(dot_output_template)
    var block_input_text = new Konva.Text(html_input_text_template)
    if(cur_level==2) block_input_text.text("1.html/2.html")
    if(cur_level==3) block_input_text.text("idN")
    block_input_text.x(70)
    block_input_text.y(80)
    var brick_name = new Konva.Text(input_text_template)

    
    brick_group.add(brick_block, brick_dot_output,block_input_text, brick_name)

    brick_dot_output.on('click', ()=>{
        console.log(1);
        
        if((current_state.choosed_obj != brick_dot_output) && (current_state.choosed_obj_type !='dot')){
            current_state.choosed_obj = brick_dot_output
            current_state.choosed_obj_type = 'dot'
            brick_dot_output.fill(CHOOSED_DOT_COLOR)
            layer.draw()
    
        }else if(current_state.choosed_obj == brick_dot_output){
            current_state.choosed_obj = null
            current_state.choosed_obj_type = null
            brick_dot_output.fill(DOT_INPUT_COLOR)
            layer.draw()
           
        }else if((current_state.choosed_obj != brick_dot_output)&&(current_state.choosed_obj_type=='dot')){
            //Связываем две точки
            
            if(!(is_dot_in_dot_links(brick_dot_output) || is_dot_in_dot_links(current_state.choosed_obj))){
                
                
                dot_links.push([current_state.choosed_obj, brick_dot_output])
                console.log(dot_links);
                update_arrows()
            }
            current_state.choosed_obj.fill(DOT_INPUT_COLOR)
            current_state.choosed_obj = null
            current_state.choosed_obj_type = null
            layer.draw()
        }
    })

    

    brick_group.on('dragmove', ()=>{
        update_arrows()
    })

    var input_brick = {
        id:id,
        brick:  brick_group,
        type: "OUTPUT",
        
        inputs:{
         'inp1': {
            id: (id+'inp1'),
            obj:brick_dot_output
         }
        }
    }
    return input_brick

}

function generate_output_brick(id){
    var brick_group = new Konva.Group(output_group_template)
    var brick_block = new Konva.Rect(html_block_template)
    var brick_dot_input= new Konva.Circle(dot_input_template)
    var brick_name = new Konva.Text(output_text_template)

    
    brick_group.add(brick_block, brick_dot_input, brick_name)

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

    brick_group.on('dragmove', ()=>{
        update_arrows()
    })

    var output_brick = {
        id:id,
        brick:  brick_group,
        type: "OUTPUT",
        
        inputs:{
         'inp1': {
            id: (id+'inp1'),
            obj:brick_dot_input
         }
        }
    }
    return output_brick

}

function generate_html_brick(id){
    var brick_group = new Konva.Group(html_group_template)
    var brick_block = new Konva.Rect(html_block_template)
    var brick_dot_output= new Konva.Circle(dot_output_template)
    var brick_dot_input= new Konva.Circle(dot_input_template)
    var brick_name = new Konva.Text(html_text_template)
    var block_input_text = new Konva.Text(html_input_text_template)
    var brick_input_label = new Konva.Label(input_label_template).add(block_input_text)

    brick_input_label.add(block_input_text)
    brick_group.add(brick_block, brick_input_label,brick_dot_input, brick_dot_output, brick_name)

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

    brick_dot_output.on('click', ()=>{
        console.log(1);
        
        if((current_state.choosed_obj != brick_dot_output) && (current_state.choosed_obj_type !='dot')){
            current_state.choosed_obj = brick_dot_output
            current_state.choosed_obj_type = 'dot'
            brick_dot_output.fill(CHOOSED_DOT_COLOR)
            layer.draw()
    
        }else if(current_state.choosed_obj == brick_dot_output){
            current_state.choosed_obj = null
            current_state.choosed_obj_type = null
            brick_dot_output.fill(DOT_INPUT_COLOR)
            layer.draw()
           
        }else if((current_state.choosed_obj != brick_dot_output)&&(current_state.choosed_obj_type=='dot')){
            //Связываем две точки
            
            if(!(is_dot_in_dot_links(brick_dot_output) || is_dot_in_dot_links(current_state.choosed_obj))){
                
                
                dot_links.push([current_state.choosed_obj, brick_dot_output])
                console.log(dot_links);
                update_arrows()
            }
            current_state.choosed_obj.fill(DOT_INPUT_COLOR)
            current_state.choosed_obj = null
            current_state.choosed_obj_type = null
            layer.draw()
        }
    })

    brick_group.on('dragmove', ()=>{
        update_arrows()
    })

    brick_block.on("click", ()=>{
        current_state.choosed_obj = brick_group
        current_state.choosed_obj_type = "brick_html"
        set_brick_menu(html_brick)
        
    })

    var html_brick = {
        id:id,
        brick:  brick_group,
        type: "HTML",
        
        outputs:{
         'out1': {
            id: (id+'out1'),
            obj:brick_dot_output
         }
        }
    }
    return html_brick
    
}

function generate_if_brick(id){
    
    var brick_group = new Konva.Group(if_group_template)
    var brick_block = new Konva.Rect(block_template)
    var brick_text = new Konva.Text(if_text_template)
    var brick_dot_output_true= new Konva.Circle(dot_output_true_template)
    var brick_dot_output_false= new Konva.Circle(dot_output_false_template)
    var brick_dot_input= new Konva.Circle(dot_input_template)
    var block_input_text = new Konva.Text(html_input_text_template)
    block_input_text.text("==example.html")
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

    brick_group.on('dragmove', ()=>{
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

    brick_block.on("click", ()=>{
        current_state.choosed_obj = brick_group
        current_state.choosed_obj_type = "brick"
        set_brick_menu(if_brick)
        
    })

    return if_brick
}

function generateArrow(x1, y1, x2, y2){
    var arrow = new Konva.Arrow(arrow_template)
    arrow.points([x1, y1, x2, y2])
    arrow.on('click', ()=>{
        set_arrow_menu(arrow)
    })
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

function spawn_if_brick(){
    var if_brick = generate_if_brick(get_brick_id())
    layer.add(if_brick.brick)
    layer.draw()
}

function spawn_html_brick(){
    var html_brick = generate_html_brick(get_brick_id())
    layer.add(html_brick.brick)
    layer.draw()
}
function spawn_output_brick(){
    var output_brick = generate_output_brick(get_brick_id())
    output_brick.brick.attrs.x = output_brick.brick.attrs.x*(++spawned_outputs)
    layer.add(output_brick.brick)
    layer.draw()
}

function spawn_input_brick(){
    var input_brick = generate_input_brick(get_brick_id())
    layer.add(input_brick.brick)
    layer.draw()
}

function spawn_db_brick(){
    var db_brick = generate_db_brick(get_brick_id())
    layer.add(db_brick.brick)
    layer.draw()
}
function spawn_base_brick(){
    var base_brick = generate_base_brick(get_brick_id())
    layer.add(base_brick.brick)
    layer.draw()
}

function set_arrow_menu(arrow){
    if((brick_menu.choosed_brick) && (brick_menu.choosed_brick_type == 'brick')){
        brick_menu.choosed_brick.brick.findOne('.block').attrs.stroke='black';
    }
    if((brick_menu.choosed_brick)&&(brick_menu.choosed_brick!=arrow) && (brick_menu.choosed_brick_type == 'arrow')){
        brick_menu.choosed_brick.attrs.stroke='black';
        brick_menu.choosed_brick.attrs.fill='black';
    }
    


    brick_menu.choosed_brick = arrow
    brick_menu.choosed_brick.attrs.stroke='red';
    brick_menu.choosed_brick.attrs.fill='red';
    brick_menu.choosed_brick_type = 'arrow'
    brick_menu.brick_name.innerHTML = "Arrow"
    brick_menu.delete_button.onclick = ()=>{
        dot_links.splice(arrows_list.indexOf(arrow), 1)
        arrows_list.splice(arrows_list.indexOf(arrow), 1)
        arrow.remove()
        layer.draw()
    }
    layer.draw()
    console.log("arrow clicked");
}

function set_brick_menu(brick){
    if((brick_menu.choosed_brick)&&(brick_menu.choosed_brick!=brick) && (brick_menu.choosed_brick_type == 'brick')){
        brick_menu.choosed_brick.brick.findOne('.block').attrs.stroke='black';
    }
    if((brick_menu.choosed_brick)&&(brick_menu.choosed_brick!=brick) && (brick_menu.choosed_brick_type == 'arrow')){
        brick_menu.choosed_brick.attrs.stroke='black';
        brick_menu.choosed_brick.attrs.fill='black';
    }
    brick_menu.choosed_brick_type = 'brick'
    brick_menu.choosed_brick = brick
    brick_menu.choosed_brick.brick.findOne('.block').attrs.stroke='white';
    layer.draw()
    //brick_menu.choosed_brick.brick.findOne('.block').stroke("white")
    brick_menu.brick_name.innerHTML = brick.type + " block";
    var brick_text = brick.brick.findOne('.input_text')
    brick_menu.brick_input.placeholder = brick_text.attrs.text
    
    brick_menu.brick_input.onchange = ()=>{
        
        
        brick_text.text(brick_menu.brick_input.value)
        layer.draw()
    }
    brick_menu.delete_button.onclick = ()=>{
        if (cur_level!=3){
        brick_menu.choosed_brick.brick.remove()
        brick_menu.choosed_brick=null
        layer.draw()
        }
    }
}

function get_output_text(){

}