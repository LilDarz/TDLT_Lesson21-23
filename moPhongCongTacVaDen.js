class ElectricLamp{
    constructor(status){
        this.status = status;
    }
    turnOn(){
        if(this.status){
            alert("Light On");
        }
    }
    turnOff(){
        if(this.status==false){
            alert("Light Off");
        }
    }
}

class SwitchButton {
    constructor(s,l){
        this.status=s;
        this.lamp = l;
    }
    connectToLamp(ElectricLamp){
        this.lamp = ElectricLamp
    }
    switchOff(){
        this.status = false;
        this.lamp.status = false;
        this.lamp.turnOff();
    }
    switchOn(){
        this.status = true;
        this.lamp.status = true;
        this.lamp.turnOn();
    }
}

let lamp1 = new ElectricLamp();
let switch1 = new SwitchButton(true,lamp1);
switch1.switchOn();