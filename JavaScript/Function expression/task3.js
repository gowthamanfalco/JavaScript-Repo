function range(s,r,n){
    if(n >= s && r>=n){
        return "between the range";
    }
    else{
        return "outside the range";
    }
}
let s = parseInt(prompt("Enter the start values"));
let n = parseInt(prompt("Enter the number values"));
let r = parseInt(prompt("Enter the range values"));

var checkin_range= range(s,r,n);
console.log(checkin_range);