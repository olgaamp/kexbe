class Town {

    constructor(name, population, pollutionLevel) {
        this.name = name;
        this.population = population;
        this.pollutionLevel = pollutionLevel;
    }

    name;
    population;
    pollutionLevel;
}

class TownFilter {
    filter(arrayForFilter, controlNumber) {
        let filteredArray = [];
        for (let newElement of arrayForFilter) {
            if (newElement.population > controlNumber) {
                filteredArray.push(newElement)
            }
        }
        return filteredArray
    }

    filterByName(arrayForFilter, controlString) {
        let filteredArray = [];
        for (let newElement of arrayForFilter) {
            if (newElement.name.includes(controlString)) {
                filteredArray.push(newElement)
            }
        }
        return filteredArray
    }

    filterByPollutionLevel(arrayForFilter, controlPollutionLevel) {
        let filteredArray = [];
        for (let newElement of arrayForFilter) {
            if (functionToCheck(newElement)) {
                filteredArray.push(newElement)
            }
        }
        return filteredArray
    }
}


let towns = [
    new Town("Gorod 1", 500, 350),
    new Town("Gorod 2", 5000, 1678),
    new Town("Gorod 3", 3000, 15627)
];

let townFilter = new TownFilter();
let filteredArray = townFilter.filter(towns, 2000);
let filteredArray2 = townFilter.filterByName(towns, '2');
let filteredArray3 = townFilter.filterByPollutionLevel(towns, 2000);


console.log();

