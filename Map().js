var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);

// skills drill add five to array of numbers
var numbers = [0,2,4,6,8];
var plusFive = numbers.map(function(num){
    return num + 5;
});
console.log(plusFive);   

// extract a specific property from each object in an array
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);

// extract the population of each city, instead of city name (stuck at "undefined array")
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityPop = cities.map(function(population){
    return population.Population;
});
console.log(cityPop);

//Skills drill, filter the results to include only animals whose 
//species name starts with the letter "s"

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var startsWithS = words.filter((words) = words.startsWithS("S"));

console.log(startsWithS);