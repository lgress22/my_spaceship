function my_spaceship(string){
    let x = 0;
    let y = 0;
    let direction = "up";
    let i = 0;
    let final;

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
    if(string[i] == "A"){
        if(direction == "up"){
            y = y - 1;
        }
        if (direction == "down"){
            y = y + 1;
        }
        if(direction == "right"){
            x = x + 1;
        }
        if(direction == "left"){
            x = x - 1;
        } 

    }
        i++;
    }//return direction;
    //console.log(string);
    final = "{x: " + x +" y: " + y +", direction: '"+ direction +"'}";

}   
 //my_spaceship('RAALALL');