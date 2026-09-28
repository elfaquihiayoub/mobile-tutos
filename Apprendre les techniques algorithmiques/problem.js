let productList=[
     { produit:"a" ,prix:30,views:1200},
     { produit:"b" ,prix:20,views:2500},
     { produit:"c" ,prix:15,views:1800},
     { produit:"d" ,prix:40,views:3000},
     { produit:"e" ,prix:10,views:900},
     { produit:"f" ,prix:25,views:2000}
    
]

let Budget = 100;

function triParViews(array){
    for(i=0;i<array.length;i++){

        for(j=i+1;j<array.length;j++){
            if(array[j].views<array[i].views){
               let temp=array[i];
                array[i]=array[j];
                array[j]=temp;
            }
            
        }
    }
    return array;
}

let produitsTriesViews=triParViews(productList);        // tried list of product by views

// etape 1 completed and tested --------------

function moreThan1500ViewsFilter(array){

    let moreThan1500=[];

    for(i=0;i<array.length;i++){
       
        if(array[i].views>=1500){
            moreThan1500.push(array[i]);
        }
     
    }
    return moreThan1500;
}

let produitsPopulaires=moreThan1500ViewsFilter(productList);  // more than 1500 views array

//etape 2 compteled

function triParPrix(array){
    for(i=0;i<array.length;i++){

        for(j=i+1;j<array.length;j++){
            if(array[j].prix<array[i].prix){
               let temp=array[i];
                array[i]=array[j];
                array[j]=temp;
            }
            
        }
    }
    return array;
}

let produitsTriesPrix=triParPrix(produitsPopulaires);       // tried par prix array 
// etape 3 completed


function produitsAchetes(array){
    itemCounter=0;
    totalPrix=0;
    for(i=0;i<array.length;i++){
        if(array[i].prix<=Budget){
            Budget-=array[i].prix;
            totalPrix+=array[i].prix;
            itemCounter++;
        }
    }
    let arrayItems=[{
        "totalPrix" : totalPrix, "total items": itemCounter, "left change ": Budget
    }]

    return arrayItems;
}


let produitsAcheteList=produitsAchetes(produitsTriesPrix); //check of produit achate 

// etape 4 completed and tested 

console.log(produitsAcheteList);


// -----------partie 3-------------------------------

let vidios=[
    { vidio:"a" ,duree:3,views:1200},
    { vidio:"b" ,duree:5,views:2500},
    { vidio:"c" ,duree:2,views:1800},
    { vidio:"d" ,duree:5,views:3000},
    { vidio:"e" ,duree:3,views:900},
    { vidio:"f" ,duree:4,views:2000}
   
]

function calculerTotalOfVidiosPopulaireToWatch(array){
    let totalTime=10;
    let vidios=array;

    function viewsFilter(){

        let moreThan2000=[];
    
        for(i=0;i<vidios.length;i++){
           
            if(vidios[i].views>=2000){
                moreThan2000.push(vidios[i]);
            }
         
        }
        return moreThan2000;
    }
    
    
    vidios=viewsFilter()
      // phase one of views filter 

      function triParduree(){
        for(i=0;i<vidios.length;i++){
    
            for(j=i+1;j<vidios.length;j++){
                if(vidios[j].duree<vidios[i].duree){
                   let temp=vidios[i];
                   vidios[i]=vidios[j];
                   vidios[j]=temp;
                }
                
            }
        }
        return vidios;
    }
    vidios=triParduree();

        // phase two of filtring by duree

        function totalVidiosAwatch(){
            vidiosCounter=0;
            totalTimePassed=0;
            for(i=0;i<vidios.length;i++){
                if(vidios[i].duree<=totalTime){
                    totalTime-=vidios[i].duree;
                    totalTimePassed+=vidios[i].duree;
                    vidiosCounter++;
                }
            }
            let arrayVidios=[{
                "totalTimePassed" : totalTimePassed, "total vidios": vidiosCounter, "left time ": totalTime
            }]
        
            return arrayVidios;
        }

        return totalVidiosAwatch();

    



}
console.log(calculerTotalOfVidiosPopulaireToWatch(vidios));