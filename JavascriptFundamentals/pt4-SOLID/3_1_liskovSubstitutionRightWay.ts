interface IShape {
    setColor(color);
    render(area);
    getArea();
}

abstract class Shape implements IShape {

    abstract getArea();

    setColor(color) {};
    
    render(area) {
      console.log(area);
    }
}

class Rectangle extends Shape {

    private width : number;
    private height : number;

    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
    
}
class Square extends Shape {
    private length : number;

    constructor(length) {
        super();
        this.length = length;
    }
    getArea() {
        return this.length * this.length;
    }
}
function renderLargeShapes(shapes: IShape[]) {
    shapes.forEach((shape) => {
        const area = shape.getArea();
        shape.render(area);
    });
}
const shapes = [new Rectangle(4, 5), new Rectangle(4, 5), new Square(5)];
renderLargeShapes(shapes);