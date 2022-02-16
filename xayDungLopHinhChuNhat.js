class Rectangle {
    chieuDai;
    chieuRong;
    constructor(cd,cr){
        this.chieuDai=cd;
        this.chieuRong=cr;
    }
    getChieuDai(){
        return this.chieuDai
    }
    getChieuRong(){
        return this.chieuRong
    }
    getArea(){
        return this.chieuDai*this.chieuRong;
    }
    getPerimeter(){
        return (this.chieuDai+this.chieuRong)*2;
    }
    setChieuDai(dai){
        this.chieuDai = dai;
    }
    setChieuRong(rong){
        this.chieuRong = rong;
    }
}

let rectangle = new Rectangle(400,600);
let cd=rectangle.getChieuDai();
let cr=rectangle.getChieuRong();
document.write(`${rectangle.getArea()} <br>`);
document.write(`${rectangle.getPerimeter()} <br`);


let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "#00e600";
ctx.fillRect(150,150,cd,cr);
