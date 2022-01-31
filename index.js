class myArray{
    constructor(){
        this.length=0;
        this.data={}
    }

get(index){
    return this.data(index);
}
push(item){
    this.data[this.length]=item;
    this.length++;
    return this.length;
    }
pop(){
    const lastItem=this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
}
delete(index){
const item=this.data[index];
this.shiftItems(index);
return item;
}
shiftItems(index){
    for(let i=index;i<this.length-1;i++){
        this.data[i]=this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--;
}
}
const newArray=new myArray;
newArray.push('hi');
newArray.push('I');
newArray.push('my');
newArray.push('name');
newArray.push('is');
newArray.push('Ritwick');
newArray.push('Khandelwal');
newArray.push('hi');
newArray.push('hi');
newArray.pop();
newArray.delete(4);
console.log(newArray);