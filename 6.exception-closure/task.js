function parseCount(Number) {
    if (parseFloat(Number)) {
        return parseFloat(Number);
    }
    throw new Error("Невалидное значение");
}


function validateCount(Number) {
    try {
        return parseCount(Number)
    } catch (error) {
        return error;
    };
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        console.log(this.area)
        if (a > b + c || b > a + c || c > a + b) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }
    
    get area() {
        const p = (this.a + this.b + this.c) / 2
        return parseFloat(((p * (p - this.a) * (p - this.b) * (p - this.c)) ** 0.5).toFixed(3));
    } 
    get perimeter() {
        return (this.a + this.b + this.c);
    }

}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {
        return {
            get area() {
                return 'Ошибка! Треугольник не существует';
            },
              get perimeter() {
                return 'Ошибка! Треугольник не существует';
            },
    }  
    }
}