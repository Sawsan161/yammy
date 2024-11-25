//! Html element 
// ^app variable
// &function 
let categories = document.querySelector('.main-category');
let placeHplderImage = "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
let resultsDiv= document.querySelector('#results')



async function getData (){
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    let data =await response.json();
    console.log(data);
    displayCategory(data.categories)

}
getData()

function displayCategory(arr){
    for(let i = 0; i<arr.length; i++){
        categories.innerHTML += `
          <article class="col shadow" onclick="getMealsByCategory('${arr[i].strCategory}')">
            <div class="inner bg-white" style="border-radius: 6px; overflow: hidden;">
                <div class="img rounded">
                    <img src="${arr[i].strCategoryThumb || placeHplderImage}" alt="" style="width: 100%; border-radius: 6px;">
                </div>
                <div class="article-body">
                    <h2>${arr[i].strCategory}</h2>
                    <p class="description">${arr[i].strCategoryDescription}</p>
                </div>
            </div>
        </article>
        `;
    }
}


async function getMealsByCategory (category){
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    let data =await response.json();
    console.log(data);
    if (data.meals) {
        displayMeals(data.meals);
    } else {
        resultsDiv.innerHTML = "<p class='text-white'>لا توجد وجبات في هذه الفئة.</p>";
    }
}
  


function displayMeals(arr){
    resultsDiv.innerHTML ="";
    for(let i = 0; i<arr.length; i++){
        resultsDiv.innerHTML += `
          <article class="col shadow">
            <div class="inner bg-white" style="border-radius: 6px; overflow: hidden;">
                <div class="img rounded">
                    <img src="${arr[i].strMealThumb || placeHplderImage}" alt="" style="width: 100%; border-radius: 6px;">
                </div>
                <div class="article-body">
                    <h2>${arr[i].strMeal}</h2>
                   
                </div>
            </div>
        </article>
        `;
    }
}
















//* event