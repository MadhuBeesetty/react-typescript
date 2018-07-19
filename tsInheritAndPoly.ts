class Inherit {
name: string;

constructor (name:string){
this.name = name
}

greet() {
console.log('lets try inheritance');
}
}

var b = new Inherit('madhu');
b.greet();

// below i am inhering the above class which is "Inherit" and below i am adding few properties.

class InheritExtend extends Inherit {
greet() {
console.log('inheritance achieved');
}

greetNormal() {
super.greet();
}
}

var a = new InheritExtend('madhuSudhan');
a.greet();
a.greetNormal();
