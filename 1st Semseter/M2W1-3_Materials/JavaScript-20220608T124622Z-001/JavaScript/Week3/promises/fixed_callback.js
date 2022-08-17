// A promise call cleanly handle multiple asynchronous operations.
async function getData(url) {
    const response = await fetch(url);
    const result = await response.json();
    return result
}

const url = prompt("Enter a URL");

getData(url)
    .then((result) => {
        console.log("Success 1", result);
        return getData("https://reqres.in/api/unknown/2");
    }).then((result) => {
        console.log("Success 2", result);
        return getData("https://reqres.in/api/users/2");
    }).then((result) => {
        console.log("Success 3", result);
        return getData("https://reqres.in/api/unknown");
    }).catch(status => {
        console.log(`An error with status code ${status} occurred: `); // Catch any error
    });



// Tried writing this myself

// async function getResponses() {
//     try {
//         const req1 = await getData(url)
//         console.log("Success 1", req1);

//         const req2 = await getData("https://reqres.in/api/unknown/2")
//         console.log("Success 2", req2);

//         const req3 = await getData("https://reqres.in/api/users/2")
//         console.log("Success 3", req3);

//         const req4 = await getData("https://reqres.in/api/users?page=2")
//         console.log("Success 4", req4);     
   
//     } catch(status) {
//         console.log(`An error with status code ${status} occurred: `);
//     }
// }

// getResponses()













