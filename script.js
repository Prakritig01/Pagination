let items = [];
const itemPerPage = 5;
let currentPage = 1;
const itemContainer = document.querySelector(".itemContainer");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const pageInfo = document.querySelector("#pageInfo");


for (let i = 1; i <= 50; i++) {
    items.push(`Item ${i}`);
}


function displayItems() {
    itemContainer.innerHTML = "";
    const start = (currentPage - 1) * itemPerPage;
    const end = start + itemPerPage;
    const itemsToDisplay = items.slice(start, end);

    itemsToDisplay.forEach((element) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "item";
        itemDiv.textContent = element;
        itemContainer.appendChild(itemDiv);
    });

    updatePagination();
}


function updatePagination() {
    const totalPages = Math.ceil(items.length / itemPerPage);
    pageInfo.innerHTML = "";
    prevBtn.disabled = currentPage === 1;
    createPageButton(1);

    if (currentPage > 1 ) {
        addEllipsis();
    }

    let startPage = Math.max(2, currentPage - 1);
    let endPage = Math.min(totalPages - 1, currentPage + 1);

    for (let i = startPage; i <= endPage; i++) {
        createPageButton(i);
    }

    if (currentPage < totalPages ) {
        addEllipsis();
    }

    if (totalPages > 1) {
        createPageButton(totalPages);
    }

    nextBtn.disabled = currentPage === totalPages;
}


function createPageButton(pageNumber) {
    const pageButton = document.createElement("button");
    pageButton.textContent = pageNumber;
    pageButton.className = pageNumber === currentPage ? "active" : "";
    pageButton.addEventListener("click", () => {
        currentPage = pageNumber;
        displayItems();
    });
    pageInfo.appendChild(pageButton);
}

function addEllipsis() {
    const ellipsis = document.createElement("span");
    ellipsis.textContent = "...";
    ellipsis.className = "ellipsis";
    pageInfo.appendChild(ellipsis);
}

prevBtn.addEventListener("click", () => {
    currentPage--;
    displayItems();
});

nextBtn.addEventListener("click", () => {
    currentPage++;
    displayItems();
});

displayItems();
















































