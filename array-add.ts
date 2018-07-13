const fun = (...my : number[]) => {
for(var i=0; i<my.length-1; i++){
console.log(my[i]+my[i+1]);
}
}
fun(1,2,3);

