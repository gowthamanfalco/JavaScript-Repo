for(i=0;i<=100;i++){
    if((i%3==0) &&(i%5==0)){
        document.writeln(i+"fizzbuzz");
    }
    else if(i%3==0){
        document.writeln(i+"fizz");
    }
    else if(i%5==0)
    {
        document.writeln(i+"buzz");
    }
    else{
        document.writeln(i);
    }
}
