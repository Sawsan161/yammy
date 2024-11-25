//! Html element 
// ^app variable
// &function 
let mainArea = document.querySelector('.main-area');
let placeHplderImage = "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"


async function getData (){
    let response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    let data =await response.json();
    console.log(data);
    displayData(data.meals.slice(0, 20))

}
getData()

function displayData(arr){
    for(let i = 0; i<arr.length; i++){
       mainArea.innerHTML += `
          <article class="col shadow">
            <div class="inner bg-white" style="border-radius: 6px; overflow: hidden;">
                <div class="img rounded-2">
                 <i class="fa-solid fa-house-laptop"></i>
                </div>
                <div class="article-body">
                    <h2>${arr[i].strArea}</h2>
                </div>
            </div>
        </article>
        `;
    }
}