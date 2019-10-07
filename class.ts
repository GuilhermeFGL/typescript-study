interface Functional {

	log(text:string):void;
}

abstract class Generic1 {

	public type:string;

	constructor(type:string) {
		this.type = type;
	}
}

class Imp1 extends Generic1 implements Functional {

	constructor() {
		super("implementation 1");
	}

	log(text:string):void {
		console.log(text);
	}

}

let instance1:Imp1 = new Imp1();
instance1.log(instance1.type);

abstract class Generic2 {

	constructor(private type:string) { }

	getType():string {
		return this.type;
	}

	abstract printType():void;
}

class Imp2 extends Generic2 implements Functional {

	constructor() {
		super("implementation 2");
	}

	log(text:string):void {
		console.log(text);
	}

	printType():void {
		this.log(super.getType());
	}

}

let instance2:Imp2 = new Imp2();
instance2.log(instance2.getType());

let instance3:Functional = new Imp2();
instance3.log("instance of interface");

let instance4:Generic2 = new Imp2();
instance4.printType();

export {Imp1, Imp2};
