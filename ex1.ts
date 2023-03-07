function sum(a: number, b: number): number {
    return a+b;
}
console.log(sum(1, 3));



function Name(name1: string, name2:string):string{
    return name1+" "+name2;
}
console.log(Name("Leyla","Ali"))
//tsc ex1.ts --watch


interface User{
    name:string,
    age:number,
    email:string,
    isAdmin:boolean,
}

interface Product{
    name: string,
    price: number,
    description: string,
    inStock: boolean,
}
function leylaUsers(user:User):string{
    return `${user.name}, ${user.age} , ${user.email}, ${user.isAdmin} `;
}

console.log(leylaUsers({
    name:"Leyla",
    age:25,
    email:"user@gmail",
    isAdmin:true
}))

function mihaiProducts(products: Product):string {
    return `${product.name}, ${product.price}, ${product.description}, ${product.inStock}`;
}
let product: Product = {
    name: "Some Product",
    price: 500,
    description: "some description",
    inStock: true
}
//let/const variableName: variableType = value
console.log(mihaiProducts(product));

function ArrayFunc<Type>(array:Type[]):Type[]{
  return array.reverse();
}
const array1:string []=["ali","imre","mihai"];
console.log(ArrayFunc(array1))

function showFirst<Type>(array2: Type[]): number{
    if(arr.length>0){
        return arr[0];
    }
}
const arr:number []=[1,4,5,12,123];
console.log(showFirst(arr));


class Rectangle {
    width:number
    height:number
    constructor(width:number,height:number){
        this.width=width,
        this.height=height
    }
    getArea(width:number,height:number):number{
     return width*height;
    }
    getPerimeter(width:number,height:number):number{
    return 2*(width+height);
    }
    toString():string{
        return `Width: ${this.width} Height: ${this.height}`
    }
}

const rectangle=new Rectangle(25,15);
console.log(rectangle.toString())

class Circle{
    radius: number;
    constructor(radius:number){
        this.radius=radius;
    }
    getArea():number {
        return Math.PI * this.radius ** 2;
    }
    getCircumference():number{
        return 2*Math.PI*this.radius;
    }
    toString():string{
        return `string representation of the circle is ${this.radius}`
    }
}
const cerc= new Circle(8);
console.log(cerc.getArea());
