function findLargest(num1,num2,num3){
    if((num1>num2)&&(num1>num3)){
    console.log("num1 is the largest")
    }
else if((num2>num1)&&(num2>num3)){
    console.log("num2 is the largest")
}
else{
    console.log("num3 is largest")
}

}

var big=findLargest(100,200,300);
console.log(big);