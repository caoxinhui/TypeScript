

interface SquareConfig {
  color?: string,
  width?: number
}


let a: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = a

interface SquareConfig {
  color?: string
  width?: number
  [propName: string]: any
}

interface SearchFunc {
  (source: string, subString: string): boolean
}