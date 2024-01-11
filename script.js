
async function getData() {
    const response = await fetch("data.json");
    const data = await response.json();

    const list = document.querySelector(".data-container");

    const items = data.reduce((prev, cur) =>
    (prev + `
        <li class="item ${cur.category.toLowerCase()}">
            <img class="icon" src=${cur.icon} alt="">
            <span class="category">${cur.category}</span>
            <div class="score">
            ${cur.score} <span class="score-total">/ 100</span>
            </div>
        </li>`
    ), "");

    list.innerHTML = items;
}

getData();