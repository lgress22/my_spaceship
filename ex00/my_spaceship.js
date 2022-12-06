function my_spaceship(string){
    let x = 0;
    let y = 0;
    let direction = 'up';
    let i = 0;

    while(i < string.length){
        if(string[i] == "R"){
        if(direction == "up"){
            direction = "right";
        }
        else if(direction == "right"){
            direction = "down";
        }
        else if(direction == "down"){
            direction = "left";
        }
        else if(direction == "left"){
            direction = "up";
        }
    }
         else if(string[i] == "L"){
             if(direction == "up"){
                 direction = "left";
             }
        
        else if(direction == "left"){
            direction = "down";
        }
        else if(direction == "down"){
            direction = "right";
        }
        else if(direction == "right"){
            direction = "up";
        }
    }
        i++;
    }return direction;
    //console.log(string);
    //"{x: X, y: Y, direction: 'DIRECTION'}"
}   
 //my_spaceship('RAALALL');