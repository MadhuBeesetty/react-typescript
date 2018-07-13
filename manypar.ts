const fun = (name:number[], i:number=0, sum:number=0 ) =>{
if(i == name.length) return sum;
sum =sum+name[i];
return fun(name,i+1,sum);
}

console.log(fun([123,123,123,132]));
