document.getElementById("button").addEventListener("click", () => {
    let inputValue = document.getElementById("inputName").value
    let details = document.getElementById("details")
        details.innerHTML = ''
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
        .then(response => response.json())
        .then(data => {
            const item = document.getElementById("items");
            item.innerHTML = ''
            if (data.meals == null) {
                document.getElementById("msg").style.display = "block"
            } else {
                data.meals.forEach(element => {
                    document.getElementById("msg").style.display = "none"
                    const itemDiv = document.createElement("div")
                    itemDiv.className = "singleItem"
                    itemDiv.setAttribute("onclick" ,`details('${element.idMeal}')`) 
                    const itemInfo = `
                <div id = "imageDiv"><img id="image" src="${element.strMealThumb}" alt=""></div>
                <h5 id="${element.strMeal}">${element.strMeal}</h5>
                `
                    itemDiv.innerHTML = itemInfo
                    item.appendChild(itemDiv)
                });
            }
        })
})

function details(id){
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(response => response.json())
    .then(data =>{
        let meals = data.meals[0]
        let details = document.getElementById("details")
        details.innerHTML = ''
        const detailsDiv = document.createElement("div")
        const detailsInfo = `
                <div id = "imageDiv"><img id="image" src="${meals.strMealThumb}" alt=""></div>
                <h3>${meals.strMeal}</h3>
                <h6>Ingredients</h6>
                <ul>
                    <li>${meals.strArea}</li>
                    <li>${meals.strCategory}</li>
                    <li>${meals.strIngredient1}</li>
                    <li>${meals.strIngredient2}</li>
                    <li>${meals.strIngredient3}</li>
                    <li>${meals.strIngredient4}</li>
                    <li>${meals.strIngredient5}</li>
                </ul>
                `
        detailsDiv.innerHTML = detailsInfo
        details.appendChild(detailsDiv)        

    })
}