export {};
// tsc --init
// target: "es2018"
// baseUrl : './src'
//ourDir : './dist'
// gõ câu lệnh : tsc --watch
// type Product = {
//     id: number;
//     name:string;
// }
// const a: number = 140;
// const b: number = 50;
// const name: string = "nguyen the tuan";
// const age : number =20;
// const status : boolean = true;
// const info: Product ={id: 1, name: "a"};
// const stringArr: string[] = ["a","b","c"];
// const numberArr: number[] = [1,2,3,4];
// const objectArr: object[] = [{id: 1}, {id:2}]


// function sum (numA: number, numB : number) : number{
//     return numA + numB;
// }
// sum(a,b);

function show<T,U>(a: T , b: U): [T, U]{
    return [a , b];
}
show (10,20);
show ("the" ,"tuan");