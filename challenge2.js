//get speed of vehicle 
//output of speed detector 
function speed_detector(speed){
    let over_limit = false;
    let points = 0; 
    let q = 0; //excess speed
    let message = ''
    console.log(speed);
    if(speed < 70)
    {
        message = 'OK';
    }
    //output if speed limit has been surpassed
    else
    {
        over_limit = true;
        q = (speed - 70)
        points = Math.floor(q/5)
        
        if(points < 12)
        {
            message = points
        }else
        {
            message = "License Suspended"
        }
    }
    return message;
}

//console.log(speed_detector(60));
//console.log(speed_detector(83));
//console.log(speed_detector(200));
//console.log(speed_detector(140));
//console.log(speed_detector(23));
//console.log(speed_detector(115));
//console.log(speed_detector(140));
//console.log(speed_detector(155));
