function getMaxValue(){
    let array=[1,10,5]
    let max=0;
    for(i=0 ; i<array.length;i++){
        if(max<array[i]){
            max=array[i];
        }
    }
return max;
}

console.log(getMaxValue());