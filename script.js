let items = [];
const itemPerPage = 5;
let currentPage = 1;
const itemContainer = document.querySelector(".itemContainer");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");



for(let i = 1 ;i<= 50; i++){
    items.push(`Item ${i}`);
}

function displayItems(){
    itemContainer.innerHTML = "";

    const start = (currentPage-1)*itemPerPage;
    const end = start + itemPerPage;
    const itemToDisplay = items.slice(start,end);
    console.log(itemToDisplay);


    itemToDisplay.forEach((element) =>{
        const itemDiv = document.createElement("div");
        itemDiv.className = "item"; 
        itemDiv.textContent = element;
        itemContainer.appendChild(itemDiv);
    });

    updatePagination();
}

function updatePagination (){
    const pageInfo = document.querySelector("#pageInfo");
    const totalPages = Math.ceil(items.length/itemPerPage);
    
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
    prevBtn.disabled =currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
}

function nextPage(){
    currentPage++;
    displayItems();
}

function prevPage(){
    currentPage--;
    displayItems();
}
displayItems();

prevBtn.addEventListener("click" , prevPage);
nextBtn.addEventListener("click",nextPage);


