class Apple{
    weight;
    constructor(weight){
        this.weight=weight;
    }
    getWeight(){
        return this.weight;
    }
    emptyApple(){
        if(this.weight<=0){
            return true;
        }else{
            return false;
        }
    }
    decrease(){
        if(this.emptyApple()){
            alert("There is no apple");
        }else{
            this.weight--;
        }
    }
}

class Human{
    name;
    gender;
    weight;
    constructor(name,gender,weight){
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name=name;
    }
    getWeight(){
        return this.weight;
    }
    setWeight(){
        this.weight=weight;
    }
    isMale(){
        if(this.gender==1){
            return true;
        }else{
            return false;
        }
    }
    getGender(){
        if(this.isMale()){
            return "Male";
        }else{
            return "Female";
        }
    }
    say(string){
        console.log(string);
    }
    checkApple(apple){
        return apple.emptyApple();
    }
    eat(apple){
        if(apple.getWeight()>0){
            apple.decrease();
            this.weight++;
        }else{
            alert("There is no apple");
        }
    }
    getInfo(human){
        alert(`${human.name}, ${human.weight}, ${human.gender}`);
    }
}

let apple1 = new Apple(10);
let adam = new Human("Adam", 1, 70);
let eva = new Human("Eva", 0, 60);

adam.say(`I am ${adam.getName()}`);
eva.say(`I am ${eva.getName()}`);

document.write(`The apple's pieces are ${apple1.getWeight()} <br>`)
while(apple1.emptyApple()!==true){
    document.write(`Adam eats a piece of apple </br>`);
    adam.eat(apple1);

    document.write(`Apple left: ${apple1.getWeight()} <br>`);
    document.write(`Adam's weight is ${adam.getWeight()} kg <br><br>`)

    document.write(`Eva eats a piece of apple <br>`);
    eva.eat(apple1);

    document.write(`Apple left: ${apple1.getWeight()} <br> `);
    document.write(`Eva's weight is ${eva.getWeight()} kg <br><br>`)
}