import inquirer from "inquirer";


// inquirer
//     .prompt([
//     {
//         name: 'full_name',
//         message: 'Who is your best football player ?',
//         "default": 'Lionel Messi'
//         },
//         {
//             name: "dish_name",
//             message: "What is your favorite dish ?",
//         },
//         {
//             name: "favorite_color",
//             message: "What is your favorite color ?"
//         }
// ])
//     .then(function (answers) {
//         console.log("Your answer is : ".concat(answers.full_name));
//         console.log("Your answer is : ".concat(answers.dish_name));
//         console.log("Your answer is : ".concat(answers.favorite_color));

//     });

interface IIdName {
    id: number;
    name: string
}

interface IFood {
    description: string;
    calories: number;
}


let idObject: IIdName = {
    id: 1,
    name: "test"
}

console.log(idObject)


// distinguish between two interfaces using the "in" operator

function printNumOrValue(obj: IIdName | IFood): void {

    if ('id' in obj) {
        console.log(`obj name --> ${obj.name}`)
    }
    if ('calories' in obj) {
        console.log(`obj calories --> ${obj.calories}`)
    }

}

console.log(printNumOrValue({
    id: 1,
    name: 'test 1'
}))
console.log(printNumOrValue({
    description: "has rice and meet",
    calories: 256
}))

interface IPerson {
    height: number;
    name: string;
}

type PersonProp = keyof IPerson


function getProperty(key: PersonProp, value: IPerson) {

    console.log(`key ---> ${key} : ${value[key]}`)
}

console.log(getProperty('height',
{
    height: 6,
    name: 'sam'
}
))

class SimpleClass {
    id: number | undefined;
    print(): void{
        console.log(`a simple class ${this.id}`)
    }
}


let simple = new SimpleClass()
simple.id = 2
console.log(simple.print())

class ClassA implements IPrint {
    print(): void{
        console.log(`calling class A`)
    }
}


class ClassB implements IPrint {
    print(): void{
        console.log(`calling class B`)
    }
}

interface IPrint {
    print(): void;
}

function printClass(a : IPrint){
    console.log(a.print())
}

let classA = new ClassA()
let classB = new ClassB()
printClass(classA)
printClass(classB)

// class constructor

class ClassWithConstructor {
    id: number;
    constructor(id: number) {

        this.id = id

    }
}

let classTest = new ClassWithConstructor(10)
console.log(classTest)

// class modifier
// accessing a public & private property inside a class
class ClassWithPublicProperty {
    public id: number | undefined
}
let publicProp = new ClassWithPublicProperty()
publicProp.id = 100
console.log(publicProp.id)

class ClassWithPrivateProperty {
    private id: number | undefined
}
let privateProp = new ClassWithPrivateProperty()
// privateProp.id = 100
// console.log(privateProp.id)


// Inheritance

interface IBase {
    id : number
}

interface IDerivedFromBase extends IBase {
    name: string
}

class IdNameClass implements IDerivedFromBase {
    id: number = 0;
    name: string = 'namestring'
}

class BaseClass implements IBase {
    id : number = 1
}

class DerivedFromBaseClass extends BaseClass implements IDerivedFromBase {
    name: string = 'test1';

}

// using the super function

class ParentWithConstructor {
    private id: number;
    constructor(id: number) {
        this.id = id
    }

    print(): void {
        console.log("From Parent")

    }
}

class ChildWithConstructor extends ParentWithConstructor {
    private name: string;
    constructor(id: number, name: string) {
        super(id)
        this.name = name
    }

    print(): void {
        console.log("From child")

    }
}

class ParentWithConstructorA {

    print(txt:string){
        console.log("From Parent")

    }
}


class ChildWithConstructorB extends ParentWithConstructorA {

    print(txt:string){
        super.print(`calling from parent because we use the super keyword ${txt}`)
    }
}

const child = new ChildWithConstructorB()
child.print("okay test")

class BaseClassProtected {
    protected id: number;
    private name: string = "";
    constructor(id: number) {
        this.id = id;
    }
}
class AccessProtected extends BaseClassProtected {
    constructor(id: number) {
        super(id);
        console.log(`base.id = ${this.id}`);
        // console.log(`base.name = ${this.name}`)
    }
}


abstract class EmployeeBase {
    public id: number;
    public name: string;
    private salary: number;
    abstract doWork(): void;

    constructor(id: number, name: string, salary: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
}

class OfficeWorker extends EmployeeBase {

    doWork(){
        console.log(`${this.name} is doing great work writing code.`)
    }

}

class OfficeManager extends OfficeWorker {
    public employees: OfficeWorker[] = [];
    manageEmployee() {
        super.doWork()
        for (let e of this.employees) {
            e.doWork()

        }
    }
}

let joe = new OfficeWorker(1, "Joe Smith", 50000)
let mary = new OfficeWorker(2, "Mary Marther", 55000)
let manager = new OfficeManager(3, "Robert", 80000)
manager.employees.push(joe)

console.log(joe, mary)
console.log(manager)


