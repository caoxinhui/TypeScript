
let binaryLiteral: number = 0b1010
let octalLiteral: number = 0o744
let decLiteral: number = 6
let hexLiteral: number = 0xf00d

let dds2: string = "Runoob"
let years: number = 5
let words: string = `您好，今年是${name} 发布 ${years} 周年`

let flag: boolean = true

let arr1: number[] = [1, 2]
let arr2: Array<number> = [1, 2]

let x: [string, number]
x = ['Runoob', 1]
console.log(x[0])

enum Color { Red, Green, Blue }
let c: Color = Color.Blue
console.log(c)


let x3: any = 1
x3 = "I am "
x3 = false


let arrayList: any[] = [1, false, 'fine']
arrayList[1] = 100


let x1: number | null | undefined

let x2: never
let y: number

x = (() => { throw new Error('exception') })()

y = (() => { throw new Error('exception') })()

function error(message: string): never {
  throw new Error('exception')
}

function loop(): never {
  while (true) { }
}

