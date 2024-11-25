//! Html element 
// ^app variable
// &function 
let indgrediants = document.querySelector('.indgrediants');
let placeHplderImage = "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"


async function getData (){
    let response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    let data =await response.json();
    console.log(data);
    displayData(data.meals.slice(0,20))

}
getData()

function displayData(arr){
    indgrediants.innerHTML ="";
    for(let i = 0; i < arr.length; i++){
        let description= arr[i].strDescription.split('. ').slice(0, 4).join('. ') + '.' ;
        indgrediants.innerHTML += `
          <article class="col shadow">
            <div class="inner bg-white" style="border-radius: 6px; overflow: hidden;">
                <div class="img rounded-2">
                   <i class="fa-solid fa-drumstick-bite"></i>
                </div>
                <div class="article-body">
                    <h2>${arr[i].strIngredient}</h2>
                     <p class="description">${description}</p>
                </div>
            </div>
        </article>
        `;
    }
}















//* event