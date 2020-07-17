function feetToMile(feet){
    if(feet<0){
        return 'Negative length is not valied';
    }
    else{
        var mile = feet/5280;
        return mile;
    }
}
console.log(feetToMile(-50));
function woodCalculator(chair,table,bed){
    if((chair<0)||(Math.ceil(chair)!==Math.floor(chair))){
        return 'Ammount of Chair can not be a negative or a fraction number,Please input a positive integer value';
    }
    else if((table<0)||(Math.ceil(table)!==Math.floor(table))){
        return 'Ammount of Table can not be a negative or a fraction number,Please input a positive integer value';
    }
    else if((bed<0)||(Math.ceil(bed)!==Math.floor(bed))){
        return 'Ammount of Bed can not be a negative or a fraction number,Please input a positive integer value';
    }
    else{
        totalAmountOfWood = chair+table*3+bed*5;
        return totalAmountOfWood;
    }
}
console.log(woodCalculator(3,-5,3));
function brickCalculator(floor){
    if((floor<0)||(Math.ceil(floor)!==Math.floor(floor))){
        return 'Ammount of Floor can not be negative or fraction';
    }
    else if(floor<=10){
        var totalBrick = floor*15*1000;
        return totalBrick;   
    }
    else if(floor>=11 && floor<=20){
        var mediumFloor=floor-10;
        totalBrick=(10*15+mediumFloor*12)*1000;
        return totalBrick; 
    }
    else{
        var topFloor=floor-20;
        totalBrick=(10*15+10*12+topFloor*10)*1000;
        return totalBrick;
    }  

}
console.log(brickCalculator(-5));
function tinyFriend(name){
    if(name.length==0){
        return 'You do not entry any of your friend name yet.Please input your friend name'
    }
    else{
        var nameSlice = name.slice(',');
    var smallestName = nameSlice[0];
    for(var i = 0; i < nameSlice.length; i++){
      if(nameSlice[i].length < nameSlice[0].length){
      smallestName = nameSlice[i];
       }
    }
    return smallestName;
    } 
  }
  console.log(tinyFriend([]));