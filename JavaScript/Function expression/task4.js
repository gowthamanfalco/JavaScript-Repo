function evaluate(n1,n2,operation){
    if(operation === "add"){
       return n1+n2;
    }
    else if (operation === "sub"){
       return n1-n2;
    } 
    else if (operation === "mul"){
       return n1*n2;
    } 
    else if (operation  === "div") {
       return n1/n2; 
    } 
    else if(operation === "mod") {
       return n1%n2; 
    }  
    else{
       return "Invalid operations";
    }
   }

   let n1 = parseInt(prompt("Enter the values"));
   let n2= parseInt(prompt("Enter the values"));
   let operation=prompt("add/sub/mul/div/mod");
   ans = evaluate(n1,n2,operation); 
   window.alert(ans)