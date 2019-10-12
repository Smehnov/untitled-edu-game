var last_brick_id = 0
var is_level_completed = false

var spawned_outputs= 0

var current_state = {
    choosed_obj: null,
    choosed_obj_type: null
}
var dot_links = [
    
]

var arrows_list = []

var brick_menu = {
    brick_name: document.getElementById("block_name"),
    brick_input: document.getElementById("block_input"),
    delete_button:document.getElementById("delete_block_but"),
    choosed_brick: null,
    choosed_brick_type:null
}




ifs_list=[]