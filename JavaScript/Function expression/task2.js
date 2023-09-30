function  findTriangleType(side1,side2,side3){
    if((side1==side2)&&(side2==side3)&&(side3==side1)){
        console.log("Equilateral Triangle")
    }
    else if((side1==side2)||(side2==side3)||(side3==side1)){
        console.log("Isosceles Triangle")
    }
    else{
        console.log("Scalene Triangle")
    }

}
var Triangle=findTriangleType(56,56,56)
console.log(Triangle);