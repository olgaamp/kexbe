class Fraction {
    nominator;
    denominator;

    toDecimal(digits) {
        return (this.nominator / this.denominator).toString().substr(0, digits);
    }
}

let firstFraction = new Fraction();
let secondFraction = new Fraction();
firstFraction.nominator = 2;
firstFraction.denominator = 3;
secondFraction.nominator = 5;
secondFraction.denominator = 7;

//let resultFraction = firstFraction + secondFraction;
let resultFraction = firstFraction.toDecimal(3) + secondFraction.toDecimal(3);
let resultFraction = firstFraction.add(secondFraction);
let resultFraction = какаятоФункцияСложенияДробей(firstfraction, secondFraction);
console.log(resultFraction)

