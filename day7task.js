// var request = new XMLHttpRequest();

// request.open('GET','https://restcountries.com/v2/all', true);

// request.send();

// request.onload = function(){

//     var data = JSON.parse(request.response);
//     console.log(data);

    // To find the countries in asia//

        // request.onload = function(){
        // var data = JSON.parse(request.response);
        // console.log(data);
//     var result = data.filter((element)=>{
//         return element.region === "Asia";
//     })
//     console.log(result);
// }

    //  To find the population of people lessthan 2 lakhs//
        
        // request.onload = function(){
        // var data = JSON.parse(request.response);
        // console.log(data);
//     var result = data.filter((element)=>{
//         return element.population < 200000;
//     })
//     console.log(result);
// }

    // syntax for reduce function //

// let array = [1,2,3,4,5,6,7,8,9]
//     let result = array.reduce((initial, curr)=>{
//         return initial+curr;
//     })
//     console.log(result);

   // To find the total population of all countries //

    // request.onload = function(){
    // var data = JSON.parse(request.response);
    // console.log(data);

// let totalPopulation = data.reduce((initial,curr)=>{
//     return population=  initial + curr.population;
// },0);
//     console.log(totalPopulation);
// }

// To find the countries which are using US dollars as currency //

// let Usdollar = data.filter((country) => (country.currencies !== undefined))
//     let realanswer = Usdollar.filter((dollar) => (dollar.currencies[0].name === "United States dollar"))
//     console.log(realanswer);

// }
//  Doubts in foreach function //