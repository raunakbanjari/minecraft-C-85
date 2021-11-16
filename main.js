var canvas = new fabric.Canvas('myCanvas');
block_image_height = 30;
block_image_width = 30;
player_x = 10;
player_y = 10;
player_object = "";
function player_update(){
fabric.Image.fromURL("player.png" , function(Img){
player_object = Img;    
player_object.scaleToWidth(150)
player_object.scaleToHeight(140)
player_object.set({
top:player_y,
left:player_x
});
canvas.add(player_object);
});
}
function new_image(get_image){
fabric.Image.fromURL(get_image, function(Img){
block_image_object = Img;
block_image_object.scaleToWidth(block_image_width);
Block_image_object.scaleToHeight(block_image_height)
block_image_object.set({
top:player_y,
left:player_x
})
canvas.add(block_image_object);
})
}
window.addEventListener("my_keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80'){
        block_image_height = block_image_height + 10;
        block_image_width = block_image_width + 10;
        document.getElementById("current_height").innerHTML = block_image_height;
        document.getElementById("current_width").innerHTML = block_image_width;
        
    }
    
    if(e.shiftKey == true && keyPressed == '77'){
        block_image_height = block_image_height - 10;
        block_image_width = block_image_width - 10;
        document.getElementById("current_height").innerHTML = block_image_height;
        document.getElementById("current_width").innerHTML = block_image_width;
        
    }
    if(keyPressed == '38'){
        up();
        console.log("up");        
    }
    if(keyPressed == '40'){
        down();
        console.log("down");        
    }
    if(keyPressed == '37'){
        left();
        console.log("left");        
    }
    if(keyPressed == '39'){
        right();
        console.log("right");        
    }
    
    if(keyPressed == '87'){
        new_image("wall.jpg");
        
        console.log("wall-w");
            
        }
    if(keyPressed == '89'){
        new_image("yellow_wall.png");
        
        console.log("yellow_wall-y");
            
        }
    if(keyPressed == '84'){
        new_image("trunk.jpg");
        
        console.log("trunk-t");
            
        }
    if(keyPressed == '85'){
        new_image("unique.png");
        
        console.log("unique-u");
            
        }
    if(keyPressed == '76'){
        new_image("light_green.png");
        
        console.log("light_green-l");
            
        }
    if(keyPressed == '71'){
        new_image("ground.png");
        
        console.log("ground-g");
            
        }
    if(keyPressed == '68'){
        new_image("dark_green.png");
        
        console.log("dark_green-d");
            
        }
    if(keyPressed == '67'){
        new_image("cloud.jpg");
        
        console.log("cloud-c");
            
        }
    if(keyPressed == '82'){
        new_image("roof.jpg");
        
        console.log("roof-r");
            
        }
    
    
    
    
    
}
