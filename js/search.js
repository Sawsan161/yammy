


let searchName = document.querySelector(".search-by-name");
let searchFirstletter = document.querySelector(".Search-By-First-Letter");
let resultsDiv = document.getElementById('results');
let placeHplderImage = "https://www.svgrepo.com/show/508699/landscape-placeholder.svg";
console.log(searchFirstletter)



// !=================== search by Name
searchName.addEventListener("input", async function() {
    let query = searchName.value.trim();
    if (query !== "") {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        let data = await response.json();
        
      
        if (data.meals) {
            displayData(data.meals);
        } else {
            resultsDiv.innerHTML = "<p class='text-white'>No recipes found.</p>";
        }
    } else {
        resultsDiv.innerHTML = ""; 
    }
});

//!=============================== search By First Litter
searchFirstletter.addEventListener("input", async function() {
    let letter = searchFirstletter.value.trim().charAt(0);
    if (letter !== "") {
        let makeResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
        let letterData = await makeResponse.json();
        
      
        if (letterData.meals) {
            displayData(letterData.meals);
        } else {
            resultsDiv.innerHTML = "<p class='text-white'>No recipes found for this letter.</p>";
        }
    } else {
        resultsDiv.innerHTML = "";
    }
    console.log(letterData)
});




// !display data
function displayData(arr) {
    resultsDiv.innerHTML = ""; 
    for (let i = 0; i < arr.length; i++) {
        resultsDiv.innerHTML += `
            <article class="col shadow">
                <div class="card shadow-sm">
                    <img src="${arr[i].strMealThumb || placeHplderImage}" class="card-img-top" alt="${arr[i].strMeal}">
                    <div class="card-body">
                        <h5 class="card-title">${arr[i].strMeal}</h5>
                    </div>
                </div>
            </article>
        `;
    }
}


