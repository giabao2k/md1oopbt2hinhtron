class Circle{
    radius;
    constructor(r){
        this.radius = r;
    }
    getArea(){
        let s = Math.PI * this.radius * this.radius;
        return s;
    }
}
let kq = new Circle(2);
document.write(`diện tích hình tròn là ${kq.getArea()}`)
