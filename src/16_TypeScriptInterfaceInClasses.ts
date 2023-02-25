//Interface IN Class 

//Example :
interface yoInterface{
    id:number
    name:string
    register():string
}
//Inheritance: Implements
class yo implements yoInterface{
    id:number
    name:string

    constructor(id:number,name:string){
        this.id=id
        this.name=name
    }
    //we not to declare any types in member function
    register(){
        return this.name
    }
}

const e1=new yo(10001,"rahulsaini")
console.log(e1);
console.log(e1.register())