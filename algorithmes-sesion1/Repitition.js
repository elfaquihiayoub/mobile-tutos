let nombers =[4, 7, 2, 7, 9, 4, 5];
let repetition = [];

for(i=0;i<nombers.length;i++){
    let currentPlaceValue=nombers[i];
    let isFound =false;

        for(j=0;j<nombers.length;j++){

           if(i==j){ 
             continue   }
            
            if(currentPlaceValue==nombers[j]){
                isFound=true;
                break;
            }

          } 
      


if(isFound){
    let ifAlreadyExist =false;
k
    for (let k = 0; k < repetition.length; k++) {
        if (currentPlaceValue == repetition[k]) {
            ifAlreadyExist = true;
            break;
        }
    }
    if(ifAlreadyExist==false){
        repetition.push(currentPlaceValue);
    }
}    

}
console.log(repetition);