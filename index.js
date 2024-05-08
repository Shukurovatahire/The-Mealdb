const input = document.getElementById("input");
const btn = document.getElementById("btn");
const form = document.getElementById("form");
const title = document.getElementById("title");
const img = document.getElementById("img");
const video = document.getElementById("iframe");
const li1 = document.getElementById("li1");
const li2 = document.getElementById("li2");
const li3 = document.getElementById("li3");
const li4 = document.getElementById("li4");
const li5 = document.getElementById("li5");
const li6 = document.getElementById("li6");
const li7 = document.getElementById("li7");
const li8 = document.getElementById("li8");
const steps = document.getElementById("steps");

document.addEventListener("DOMContentLoaded", () => {
  const xhr =new  XMLHttpRequest();
  xhr.open("GET", "https://www.themealdb.com/api/json/v1/1/random.php");
  xhr.responseType = "json";
  xhr.onload = () => {
    const responseData = xhr.response;
    console.log(responseData);

    
    title.innerHTML = responseData.meals[0].strMeal;
    console.log((title.innerHTML = responseData.meals[0].strMeal));
    img.src = responseData.meals[0].strMealThumb;
    video.src = `https://www.youtube.com/embed/${responseData.meals[0].strYoutube.slice(
      -11
    )}`;
    li1.innerHTML = responseData.meals[0].strIngredient1;
    li2.innerHTML = responseData.meals[0].strIngredient2;
    li3.innerHTML = responseData.meals[0].strIngredient3;
    li4.innerHTML = responseData.meals[0].strIngredient4;
    li5.innerHTML = responseData.meals[0].strIngredient5;
    li6.innerHTML = responseData.meals[0].strIngredient6;
    li7.innerHTML = responseData.meals[0].strIngredient7;
    li8.innerHTML = responseData.meals[0].strIngredient8;
    steps.innerHTML = responseData.meals[0].strInstructions;

  };
  xhr.send()
});

form.addEventListener(
  "submit",
  (search = (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.responseType = "json";
    xhr.open(
      "GET",
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`
    );

    xhr.onload = () => {
      let responseData = xhr.response;
      console.log(responseData);

      title.innerHTML = responseData.meals[0].strMeal;
      console.log((title.innerHTML = responseData.meals[0].strMeal));
      img.src = responseData.meals[0].strMealThumb;
      video.src = `https://www.youtube.com/embed/${responseData.meals[0].strYoutube.slice(
        -11
      )}`;
      li1.innerHTML = responseData.meals[0].strIngredient1;
      li2.innerHTML = responseData.meals[0].strIngredient2;
      li3.innerHTML = responseData.meals[0].strIngredient3;
      li4.innerHTML = responseData.meals[0].strIngredient4;
      li5.innerHTML = responseData.meals[0].strIngredient5;
      li6.innerHTML = responseData.meals[0].strIngredient6;
      li7.innerHTML = responseData.meals[0].strIngredient7;
      li8.innerHTML = responseData.meals[0].strIngredient8;
      steps.innerHTML = responseData.meals[0].strInstructions;
    };

    xhr.send(null);
  })
);
