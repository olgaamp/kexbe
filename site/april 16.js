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

class Filter {
    filter(arrayForFilter, filterFunction) {
        let filteredArray = [];
        for (let arrayForFilterElement of arrayForFilter) {
            if (filterFunction(arrayForFilterElement)) {
                filteredArray.push(arrayForFilterElement)
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

