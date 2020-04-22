class Currency {
    constructor(name) {
        this.name = name;
    }

    name;
}

class CurrencySymbol {

    constructor(nameFrom, nameTo, sale, buy) {
        this.nameFrom = nameFrom;
        this.nameTo = nameTo;
        this.sale = sale;
        this.buy = buy;
    }

    nameFrom;
    nameTo;
    sale;
    buy;
}

class Converter {

    constructor(symbols) {
        this.symbols = symbols;
    }

    convert(amount, currency1, currency2) {
        let newAmount = amount;
        let pairOne = 1;
        let pairTwo = 1;
        let currency1Memory = currency1;
        let currency2Memory = currency2;
        let answerFound = false;
        for (let i = 0; i < this.symbols.length; i++) {
            let symbol = this.symbols[i];
            if (symbol.nameFrom === currency1 || symbol.nameTo === currency1) {
                if (symbol.nameFrom === currency1 && symbol.nameTo === currency2) {
                    newAmount = newAmount * symbol.sale;
                } else {
                    if (symbol.nameTo === currency1 && symbol.nameFrom === currency2) {
                        newAmount = newAmount * symbol.buy;
                    } else {
                        if (symbol.nameFrom === currency1) {
                            currency1 = symbol.nameTo;
                            newAmount = newAmount * symbol.sale;
                        }
                        if (symbol.nameTo === currency1) {
                            currency1 = symbol.nameFrom;
                            newAmount = newAmount * symbol.buy;
                        }
                        answerFound = false;
                        for (let j = 0; j < this.symbols.length; j++) {
                            let symbol2 = this.symbols[j];
                            // if (symbol2.nameFrom === currency1 || symbol2.nameTo === currency1) {
                            if (symbol2.nameFrom === currency1 && symbol2.nameTo === currency2) {
                                newAmount = newAmount * symbol2.sale;
                                console.log(newAmount);
                                answerFound = true;
                            }
                            if (symbol2.nameTo === currency1 && symbol2.nameFrom === currency2) {
                                newAmount = newAmount * symbol2.buy;
                                console.log(newAmount);
                                answerFound = true;
                            }
                            // }
                            if (answerFound)
                                break;
                        }

                    }
                }

            }
        }
        return newAmount;
    }

}

let
    currencies = [
        new Currency('valuta 1'),
        new Currency('valuta 2'),
        new Currency('valuta 3'),
        new Currency('valuta 4'),
        new Currency('valuta 5'),
        new Currency('valuta 6'),
        new Currency('valuta 7'),
    ];

let
    symbols = [
        new CurrencySymbol(currencies[4], currencies[5], 9, 0.9),
        new CurrencySymbol(currencies[2], currencies[0], 5, 0.5),
        new CurrencySymbol(currencies[3], currencies[6], 2, 0.2),
        new CurrencySymbol(currencies[6], currencies[2], 3, 0.3),
        new CurrencySymbol(currencies[5], currencies[2], 7, 0.7),
    ];


let
    currencyConverter = new Converter(symbols);
let
    a = currencyConverter.convert(1000, currencies[4], currencies[2]);
console
    .log(a);

/*
let townFilter = new Filter();
towns.filter((town => {
    return town.name.includes("2");
}));
let a = towns.map((town) => {
    return town.population;
});
let filteredByNameArray = townFilter.filter(towns, (town) => {
    return town.name.includes("2");
});

let filteredByPopulationArray = townFilter.filter(towns, (town) => {
    return town.population > 1000;
});
let filteredByPollutionLevelArray = townFilter.filter(towns, (town) => {
    return town.pollutionLevel < 2000;
});


console.log();
*/

