/*A melhor explicação para este conceito é se você tiver uma classe pai e uma classe filha, 
então a classe base e a classe filha pode ser usadas indistintamente sem ter resultados incorretos*/

class Rectangle {
    constructor() {
        this.width = 0;
        this.height = 0;
    }
    setColor(color) {
      // ...
    }
    render(area) {
      console.log(area);
    }
    setWidth(width) {
        this.width = width;
    }
    setHeight(height) {
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
  }
class Square extends Rectangle {
    setWidth(width) {
        this.width = width;
        this.height = width;
    }
    setHeight(height) {
        this.width = height;
        this.height = height;
    }
}
function renderLargeRectangles(rectangles) {
    rectangles.forEach((rectangle) => {
        rectangle.setWidth(4);
        rectangle.setHeight(5);
        const area = rectangle.getArea(); // RUIM: Retorna 25 para o Quadrado. Deveria ser 20.
        rectangle.render(area);
    });
}
const rectangles = [new Rectangle(), new Rectangle(), new Square()];
renderLargeRectangles(rectangles);

/**********************************************************************************/
