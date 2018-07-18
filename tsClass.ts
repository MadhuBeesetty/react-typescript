class idontknowts {
	firstName: string;
	secondName: string;

constructor(firstName: string, secondName: string){
this.firstName = firstName;
this.secondName = secondName;
}

display() {
return this.firstName+this.secondName;
}

}

var a = new idontknowts('madhuSudhan','beesetty');
console.log(a.display());



