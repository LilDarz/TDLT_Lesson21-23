class Temperature{
    celsius;
    constructor(c){
        this.celsius=c;
    }
    setDoC(){
        return this.celsius;
    }
    changeCToF(){
        return (this.celsius*1.8+32);
    }
    changeCToKelvin(){
        return this.celsius+273.15;
    }
}

let temperature= new Temperature(25);
temperature.setDoC();
alert(`25 độ C chuyển qua độ F là ${temperature.changeCToF()} độ F`);
alert(`25 độ C chuyển qua độ Kelvin là ${temperature.changeCToKelvin()} độ Kelvin`);