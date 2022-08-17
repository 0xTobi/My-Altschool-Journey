function getData(url) {
    fetch(url)
        .then((response) => {
            return response.json()
        }).then((result) => {
            console.log(result);
        }).catch((status) => {
            console.log(`Error occured with code ${status} occured`)
        })
}

// Promise.all() is a method that takes an array of promises and returns a new promise.
// It runs in parallel and returns an array of the results.

const promises = [
    getData("https://reqres.in/api/unknown/2"),  
    getData("https://reqres.in/api/users/2"),   // This promise isn't dependant on the first
    getData("https://reqres.in/api/unknown")    // This doesn't depend on the second.
];

Promise.all(promises)
    .then((results) => {
        console.log("Success!", results);
    }).catch(status => {
        console.log(`An error with status code ${status} occurred: `);
    });

// Promise.race() waits only for the first settled promise and gets its result (or error).
// Promise.race(promises)
//     .then((result) => {
//         console.log("Success!", result);
//     }).catch(status => {
//         console.log(`An error with status code ${status} occurred: `);
//     });

// Promise.any() waits for any of the first successful/fulfilled promise
// Promise.any(promises)
//     .then((result) => {
//         console.log("First Success!", result);
//     }).catch(status => {
//         console.log(`An error with status code ${status} occurred: `);
//     });





