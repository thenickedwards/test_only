let pageArray = [ 1, 2, 3, 4, 5 ];

function leftButtonClick(array) {
    console.log("before", array);
     array.push(array.shift());
    console.log("after", array);
    return array;
}

function rightButtonClick(array) {
    console.log("before", array);
     array.unshift(array.pop());
    console.log("after", array);
    return array;
}

const numbersContainer = document.getElementById("numbers-container")

function renderPages(arr) {
    for (let i = 0; i < arr.length; i++) {
        let pageNum = arr[i];
        let page = document.createElement("div")
        page.innerHTML=pageNum
        numbersContainer.appendChild(page)
    }
}

renderPages(pageArray);

