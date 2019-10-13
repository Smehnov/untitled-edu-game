var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage(stage_template);
var layer = new Konva.Layer();
var cur_level = 2

document.getElementById("new_html_block_but").onclick = ()=>{
    spawn_html_brick()  
    
}

document.getElementById("new_if_block_but").onclick = ()=>{
    spawn_if_brick()  
    
}

spawn_output_brick()
spawn_output_brick()
spawn_input_brick()

document.getElementById("run_level_but").onclick = ()=>{
var cond1 = false
var cond2 = false

    var res = false;
    var output = layer.find('.output_brick')[0]
    var output_input_dot = output.findOne('.dot_input')
    console.log(output_input_dot);
    var span_result = document.getElementById('result')


    var output_input_dot = output.find('.dot_input')[0]
    var found_link = false
    for (let i = 0; i < dot_links.length; i++) {
        var arr = dot_links[i];
        console.log(arr[1]);
        
        if(arr[1]==output_input_dot){
            found_link = true
            var html_brick = arr[0].findAncestor('.html_brick')
            console.log(html_brick.findOne(".input_text").text());
            console.log(arr[0].attrs.name);
            
            
            if(((html_brick.findOne(".input_text").text()=="1.html")||(html_brick.findOne(".input_text").text()=="2.html"))&&(arr[0].attrs.name=='dot_output')){
                console.log(1111);
                
                var dot_input = html_brick.findOne(".dot_input")
                var found_link2 = false
                console.log(dot_input);
                console.log(222);
                
                console.log(dot_links);
                
                
                for (let j = 0; j < dot_links.length; j++) {
                    var arr1 = dot_links[j];
                    console.log(arr1);
                    
                    if(arr1[1]==dot_input){
                        found_link2 = true
                        if_brick=arr1[0].findAncestor('.if_brick')
                        console.log(if_brick);
                        
                        if(if_brick){
                            dot_if_input = if_brick.findOne('.dot_input')
                            for (let k = 0; k < dot_links.length; k++) {
                                var arr3 = dot_links[k];
                                console.log(555);
                                
                                if(arr3[1]==dot_if_input){
                                    console.log(arr3);
                                    
                                    if(arr3[0].findAncestor('.input_brick')){
                                        console.log(333);
                                        
                                        if (if_brick.findOne(".input_text").text().startsWith("==")){
                                            if(arr1[0].attrs.name=="dot_output_true"){
                                            if((html_brick.findOne(".input_text").text()=="1.html")&&(if_brick.findOne(".input_text").text().substr(2).trim()=="1.html")){
                                                console.log("1true");
                                                
                                                cond1 = true
                                            }else{
                                                span_result.style.color="red"
                                                span_result.innerHTML = "Неверное условие" 
                                            }
                                        }

                                        if(arr1[0].attrs.name=="dot_output_false"){
                                            console.log(if_brick.findOne(".input_text").text().substr(2).trim());
                                            
                                            if(((html_brick.findOne(".input_text").text()=="1.html")&&(if_brick.findOne(".input_text").text().substr(2).trim()=="2.html"))||((html_brick.findOne(".input_text").text()=="2.html")&&(if_brick.findOne(".input_text").text().substr(2).trim()=="1.html"))){
                                                console.log("1true");
                                                
                                                cond1 = true
                                            }else{
                                                span_result.style.color="red"
                                                span_result.innerHTML = "Неверное условие" 
                                            }
                                        }
                                        }else{
                                            span_result.style.color="red"
                                            span_result.innerHTML = "Условие должно начинаться с ==" 
                                        }

                                    }else{
                                        span_result.style.color="red"
                                        span_result.innerHTML = "Проверьте подключение IF-BLOCK <br>"

                                    }

                                    break
                                }
                            }








                            
                            
                        }else{
                            span_result.style.color="red"
                            span_result.innerHTML = "Проверьте подключение IF-BLOCK <br>"
                        }

                        break
                    }
                        

                        
                    }
                    if(found_link2==false){
                        span_result.style.color="red"
                        span_result.innerHTML = "Не найден путь в html block<br>"
                    }
                    
                }
                






                /*span_result.style.color="green"
                document.getElementById('next_level_but').classList.add("active_next_level_but") 
                span_result.innerHTML = "Читатель смог получить пост Васи, правда этим читателем был сам Вася("
                is_level_completed=true*/
                // УРОВЕНЬ ПРОЙДЕН
              break  
            }else{
                span_result.style.color="red"
                span_result.innerHTML = "Файл 1(2).html не передан в Server Response <br>"
            }
            
            
    
        
    }
    if(!found_link){
        span_result.style.color="red"
        span_result.innerHTML = "Ничего не передано в Server Response <br>"
    }

    var output = layer.find('.output_brick')[0]
    var output_input_dot = output.findOne('.dot_input')
    var found_link = false
    for (let i = 0; i < dot_links.length; i++) {
        var arr = dot_links[i];
        console.log(arr[1]);
        
        if(arr[1]==output_input_dot){
            found_link = true
            var html_brick = arr[0].findAncestor('.html_brick')
            console.log(html_brick.findOne(".input_text").text());
            console.log(arr[0].attrs.name);
            
            
            if(((html_brick.findOne(".input_text").text()=="1.html")||(html_brick.findOne(".input_text").text()=="2.html"))&&(arr[0].attrs.name=='dot_output')){
                console.log(1111);
                
                var dot_input = html_brick.findOne(".dot_input")
                var found_link2 = false
                console.log(dot_input);
                console.log(222);
                
                console.log(dot_links);
                
                
                for (let j = 0; j < dot_links.length; j++) {
                    var arr1 = dot_links[j];
                    console.log(arr1);
                    
                    if(arr1[1]==dot_input){
                        found_link2 = true
                        if_brick=arr1[0].findAncestor('.if_brick')
                        console.log(if_brick);
                        
                        if(if_brick){
                            dot_if_input = if_brick.findOne('.dot_input')
                            for (let k = 0; k < dot_links.length; k++) {
                                var arr3 = dot_links[k];
                                console.log(555);
                                
                                if(arr3[1]==dot_if_input){
                                    console.log(arr3);
                                    
                                    if(arr3[0].findAncestor('.input_brick')){
                                        console.log(333);
                                        
                                        if (if_brick.findOne(".input_text").text().startsWith("==")){
                                            if(arr1[0].attrs.name=="dot_output_true"){
                                            if((html_brick.findOne(".input_text").text()=="1.html")&&(if_brick.findOne(".input_text").text().substr(2).trim()=="1.html")){
                                                console.log("1true");
                                                
                                                cond1 = true
                                            }else{
                                                span_result.style.color="red"
                                                span_result.innerHTML = "Неверное условие" 
                                            }
                                        }

                                        if(arr1[0].attrs.name=="dot_output_false"){
                                            console.log(if_brick.findOne(".input_text").text().substr(2).trim());
                                            
                                            if(((html_brick.findOne(".input_text").text()=="1.html")&&(if_brick.findOne(".input_text").text().substr(2).trim()=="2.html"))||((html_brick.findOne(".input_text").text()=="2.html")&&(if_brick.findOne(".input_text").text().substr(2).trim()=="1.html"))){
                                                console.log("2true");
                                                
                                                cond2 = true
                                            }else{
                                                span_result.style.color="red"
                                                span_result.innerHTML = "Неверное условие" 
                                            }
                                        }
                                        }else{
                                            span_result.style.color="red"
                                            span_result.innerHTML = "Условие должно начинаться с ==" 
                                        }

                                    }else{
                                        span_result.style.color="red"
                                        span_result.innerHTML = "Проверьте подключение IF-BLOCK <br>"

                                    }

                                    break
                                }
                            }








                            
                            
                        }else{
                            span_result.style.color="red"
                            span_result.innerHTML = "Проверьте подключение IF-BLOCK <br>"
                        }

                        break
                    }
                        

                        
                    }
                    if(found_link2==false){
                        span_result.style.color="red"
                        span_result.innerHTML = "Не найден путь в html block<br>"
                    }
                    
                }
                






                /*span_result.style.color="green"
                document.getElementById('next_level_but').classList.add("active_next_level_but") 
                span_result.innerHTML = "Читатель смог получить пост Васи, правда этим читателем был сам Вася("
                is_level_completed=true*/
                // УРОВЕНЬ ПРОЙДЕН
              break  
            }else{
                span_result.style.color="red"
                span_result.innerHTML = "Файл 1(2).html не передан в Server Response <br>"
            }
            
            
    
        
    }
    if(!found_link){
        span_result.style.color="red"
        span_result.innerHTML = "Ничего не передано в Server Response <br>"
    }
    
    if((cond1 == true) && (cond2 == true)){
        span_result.style.color="green"
                document.getElementById('next_level_but').classList.add("active_next_level_but") 
                span_result.innerHTML = "Теперь у Васи в блоге 2 поста, его читают 2 близких друга и двоюродная бабушка!"
                is_level_completed=true
                // УРОВЕНЬ ПРОЙДЕН
    }     
}





document.getElementById('next_level_but').onclick = ()=>{
    if(is_level_completed==true){
        window.location.href="./level3.html";
    }
}

document.getElementById('last_level_but').onclick = ()=>{
        window.location.href="./level1.html";
}



stage.add(layer);
