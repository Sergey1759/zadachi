

function zadacha1(a,b){
    var a,b;
if ((typeof(a) == "number") && (typeof(b) == "number")){
    return a+b;
} else {
    return NaN;
}
}

function zadacha2(sumcred,procent,kilrok){
   for(var i=1; i<=kilrok;i++){
       sumcred = sumcred*(1+(procent/100));
      
   } 

}

function zadacha3(a,b){
    if(a>b){
        return a-b;
    }
    else{
        return b-a;
    }
}

    function zadacha4(a,b,c){
        return ((a+b+c)/3);
    }

function zadacha5(a){
    
    if(typeof a == "number"){
        return a = a*a;
    } else {
        return NaN;
    }
}








    