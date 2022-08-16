// A promise call cleanly handle multiple asynchronous operations.
async function getData(url) {
    const response = await fetch(url);
    const result = await response.json();
    return (result);
}

async function getAllData(url) {
    const result = await getData(url);
    console.log("Success 1", result);

    const result2 = await getData("https://reqres.in/api/unknown/2");
    console.log("Success 2", result2);

    const result3 = await getData("https://reqres.in/api/users/2");
    console.log("Success 3", result3);
    
    const result4 = await getData("https://reqres.in/api/unknown");
    console.log("Success 4", result4);
}


const url = prompt("Enter a URL");
getAllData(url)






