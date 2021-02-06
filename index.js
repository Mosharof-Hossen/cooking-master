document.getElementById("button").addEventListener("click",()=>{
    let inputValue = document.getElementById("inputName").value
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
    .then(response => response.json())
    .then(data => {
        const item = document.getElementById("items");
        item.innerHTML = ''
        if(data.meals == null){
            document.getElementById("msg").style.display = "block"
        }else{
            data.meals.forEach(element => {
                console.log(element.strMeal)
                document.getElementById("msg").style.display = "none"
                const itemDiv = document.createElement("div")
                itemDiv.className = "singleItem"
                const itemInfo = `
                <div id = "imageDiv"><img id="image" src="${element.strMealThumb}" alt=""></div>
                <h5 id="mealName">${element.strMeal}</h5>
                `
                itemDiv.innerHTML = itemInfo
                item.appendChild(itemDiv)
            });
           }
})
})