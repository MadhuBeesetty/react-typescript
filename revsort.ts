const fun = (arr:number[]):number[] => {
var a:number[] = arr.sort();
var b:number[] = arr.reverse();
return a.concat(b);
}

console.log(fun([5,1,6,7,2,8]));
