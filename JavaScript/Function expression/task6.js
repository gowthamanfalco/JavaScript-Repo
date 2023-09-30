function eval(n1){
    if( n1 >= 90 && n1<=100){
       return "S grade";
    }
    else if (n1 >= 80 && n1<= 90){
       return "A grade";
    } 
    else if (n1 >= 70 && n1<= 80){
       return "B grade";
    } 
    else if (n1 >= 60 && n1<= 70) {
       return  "C grade";
       
    } 
    else if(n1 >=50 && n1<= 60) {
       return "D grade";
       
    }
    else if(n1 >=40 && n1<= 50) {
       return "E grade";
       
    }    
    else{
       return "Invalid marks";
    }
   }

   let n1 = parseInt(prompt("Enter the values"));
   console.log("The student mark is: "+eval(n1));