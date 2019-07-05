/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function() {
    return(this.w*this.h);
};
/*
* Create a Square class that inherits from Rectangle and implement its class constructor
*/

class Square extends Rectangle {
    constructor(sup) {
        super(sup);
        this.h = sup;
        this.w = sup;
    }
};
