let a = 4;
let b = 5;

function Rectangle(a, b) {
    if(a >= 1 && a <= 100 & b >= 1 && b <= 100){
        let rect = {
            length : a,
            width : b,
            perimeter : 2*(a + b),
            area : a * b 
        }
        return rect;
    }
    return false;
}   
console.log(Rectangle(a, b))