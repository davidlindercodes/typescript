let id: number = 6
let company: string = "linder"
let isPublished: boolean = true
let x: any = 'Hello'
let age: number 
let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, true, 'david']

ids.push(4)

// Tuple 
let person: [number, string, boolean] = [1, 'david', true]

// Tuple Array 
let employee: [number, string][] 

employee = [
    [1, 'david'],
    [3, 'steve'],
    [9, 'mike']
]

// Union 
let pid: string | number = 22 

pid = 22 
pid ='22'

// Enum 

enum Direction1 {
    Up = 1, 
    Down, 
    Left, 
    Right
}

enum Direction2 {
    Up = 'Up', 
    Down = 'Down', 
    Left = 'Left', 
    Right = 'Right',
}



// Objects 

type User = {
 id: number, 
 name: string
}

const User: User = {
    id: 1, 
    name: 'John'
}

// Type Assertion 
let cid: any = 1
// let customerId = <number>cid 
let customerId = cid as number 

//functions

function addNum(x:number, y:number): number {
    return x+y
}

//void
function log(message: string | number) : void {
    console.log(message)
}

// Interfaces (perfered over types when working with objects)

interface UserInterface {
   readonly id: number
    name: string
    age? : number
   }
   
   const user1: UserInterface = {
       id: 1, 
       name: 'John'
   }

interface MathFunc {
    (x: number, y: number): number
}



interface PersonInterface {
    id: number
    name: string
    register() : string 
   }


// classes
class Person implements PersonInterface {
    id: number 
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register () {
        return `${this.name} is now registered`
    }
}

const david = new Person(3, 'david linder')

david.id = 4 

//Subclass 
class Employee extends Person {
    position: string 

    constructor(id: number, name: string, position: string) {
        super(id,name)
        this.position = position
    }
}

const emp = new Employee (3, 'david', 'junior developer')

// Generics 

function getArray<T>(items: T[]) : T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['david','andrew','mark','diane'])

strArray.push()