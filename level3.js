var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage(stage_template);
var layer = new Konva.Layer();
var cur_level = 3
var is_level_completed = false;

/*document.getElementById("new_html_block_but").onclick = ()=>{
    spawn_html_brick()  
    
}
document.getElementById("new_if_block_but").onclick = ()=>{
    spawn_if_brick()  
    
}*/

spawn_db_brick()
spawn_output_brick()
spawn_input_brick()
spawn_base_brick()



document.getElementById("run_level_but").onclick = () => {
    var res = false;
    var output = layer.findOne('.output_brick')
    var db = layer.findOne('.db_brick')
    var base = layer.findOne('.base_brick')
    var input = layer.findOne('.input_brick')

    var db_output_dot = db.findOne('.dot_output')
    var db_input_dot2 = db.findOne('.dot_input2')
    var db_input_dot4 = db.findOne('.dot_input4')
    var base_output_dot = base.findOne('.dot_output')
    var output_input_dot = output.findOne('.dot_input')
    var input_output_dot = input.findOne('.dot_output')

    var text1 = db.find('.input_text')[0]
    var text2 = db.find('.input_text')[1]
    var text3 = db.find('.input_text')[2]
    var text4 = db.find('.input_text')[3]

    console.log(output_input_dot);
    var span_result = document.getElementById('result')
    var found_link = false

    for (let i = 0; i < dot_links.length; i++) {
        arr = dot_links[i];

        if ((arr[1] == output_input_dot) && (arr[0]==db_output_dot)) {
            console.log(111);
            
            found_link = true
            var found_from = false
            for (let i = 0; i < dot_links.length; i++) {
                console.log(222);
                var arr1 = dot_links[i];
                console.log(arr);
                console.log(db_input_dot2);
                console.log(base_output_dot);
                
                
                if ((arr1[1] == db_input_dot2) && (arr1[0] == base_output_dot)) {
                    console.log(333);
                    found_from = true
                    text2.text('DATABASE1')
                    
                    
                    
                    if ((text3.text() == 'post_id') || (text3.text() == '"post_id"')) {
                        console.log(444);
                        var found_id = false
                        for (let i = 0; i < dot_links.length; i++) {
                            console.log(555);
                            var arr2 = dot_links[i];
                            if ((arr2[1] == db_input_dot4) && (arr2[0] == input_output_dot)) {
                                console.log(666);
                                var found_id = true
                                text4.text("idN")
                                layer.draw()
                                if ((text1.text() == "post_url") || (text1.text() == '"post_url"')) {
                                    console.log(7777);
                                    
                                    span_result.style.color = "green"
                                    document.getElementById('next_level_but').classList.add("active_next_level_but")
                                    span_result.innerHTML = "Читатель смог получить пост Васи, правда этим читателем был сам Вася("
                                    is_level_completed = true
                                } else {
                                    span_result.style.color = "red"
                                    span_result.innerHTML = "попытка выбрать параметр прошла неудачно"
                                }


                            break;}

                        }
                        if (!found_id) {
                            span_result.style.color = "red"
                            span_result.innerHTML = "id не передан в запрос"
                        }
                    
                    } else {

                    }


                break;}

            }
            if (!found_from) {
                span_result.style.color = "red"
                span_result.innerHTML = "База данных не передана в запрос"
            }

break;
        } else {
            span_result.style.color = "red"
            span_result.innerHTML = "Ссылка на документ .html не передана в Server Response <br>"
        }


    }


    if (!found_link) {
        span_result.style.color = "red"
        span_result.innerHTML = "Ничего не передано в Server Response <br>"
    }

    /*var html_brick = arr[0].findAncestor('.html_brick')
           if((html_brick.findOne(".input_text").text()=="")&&(arr[0].attrs.name=='dot_output')){
               span_result.style.color="green"
               document.getElementById('next_level_but').classList.add("active_next_level_but") 
               span_result.innerHTML = "Читатель смог получить пост Васи, правда этим читателем был сам Вася("
               is_level_completed=true
               // УРОВЕНЬ ПРОЙДЕН
             */
}



document.getElementById('next_level_but').onclick = () => {
    if (is_level_completed == true) {
        window.location.href = "./level4.html";
    }
}

document.getElementById('last_level_but').onclick = () => {
    window.location.href = "./level2.html";
}



stage.add(layer);
