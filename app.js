

// add to cart
let productsCountEl = document.getElementById("products-count");
let addToCartButtons = document.querySelectorAll(".add")

for (let i=0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", function() {
        productsCountEl.textContent = +productsCountEl.textContent + 1;
    })
}


// change like button state

let likeBtns = document.querySelectorAll(".img-hurt");
console.log(likeBtns)

// 1
// for ( let i = 0; i < likeBtns.length; i++) {
//     likeBtns[i].addEventListener("click", function() {
//         if (this.classList.contains("liked")) {
//             this.classList.remove("liked")
//         } else {
//             this.classList.add("liked")

//         }
//     }) 
// }

// 2
for ( let i = 0; i < likeBtns.length; i++) {
    likeBtns[i].addEventListener("click", function() {
        this.classList.toggle("liked")
    })
}
 
// modal

let  moreDetailsBtns = document.querySelectorAll(".details")
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".close-btn");


// 1
    // moreDetailsBtns.forEach(btn => (
    //     btn.addEventListener("click", function() {
    //         modal.classList.add("show");
    //         modal.classList.remove("hide")
    //     })
    // ))

    // closeBtn.addEventListener("click", function () {
    //     modal.classList.add("hide");
    //     modal.classList.remove("show")
    // })

// 2
moreDetailsBtns.forEach(btn => (
    btn.addEventListener("click", openModal)
    )
)


closeBtn.addEventListener("click", closeModal)


function openModal () {
    modal.classList.add("show");
    modal.classList.remove("hide")
} 


function closeModal () {
    modal.classList.add("hide");
    modal.classList.remove("show")
}

modal.addEventListener("click", function(e) { 
    if (e.target === modal) {
        closeModal()
    }
})

function showModalByScroll () {
    if (window.pageYOffset > document.body.scrollHeight/2) {
        openModal()
        window.removeEventListener("scroll",showModalByScroll)
    }
}

window.addEventListener("scroll",showModalByScroll)




//vhange product quantity

let decrementBtns = document.querySelectorAll(".decrement-button")[0];
let incrementBtns = document.querySelectorAll(".increment-button")[0];
let productsQuantity = document.querySelectorAll(".product-quantity input")[0];
let currentCount = +productsQuantity.value;

function toggleButtonState(count) {
    decrementBtns.disabled = count <= 1;
    incrementBtns.disabled = count >= 5;
}

toggleButtonState(currentCount);

incrementBtns.addEventListener("click", function() {
    let currentCount = +productsQuantity.value;
    let nextCount = currentCount + 1;
    productsQuantity.value = nextCount;

    toggleButtonState(nextCount);
})

decrementBtns.addEventListener("click", function() {
    let currentCount = +productsQuantity.value;
    let nextCount = currentCount - 1;
    productsQuantity.value = nextCount;

    toggleButtonState(nextCount);
})






let decrementBtnsElem = document.querySelectorAll(".decrement-button-element")[0];
let incrementBtnsElem = document.querySelectorAll(".increment-button-element")[0];
let elementQuantity = document.querySelectorAll(".element-quantity input")[0];
let currentCount1 = +elementQuantity.value;


function toggleButtonState1 (count) {
    decrementBtnsElem.disabled = count <= 1;
    incrementBtnsElem.disabled = count >= 5; 
}

toggleButtonState1 (currentCount1);


incrementBtnsElem.addEventListener("click", function () {
    let currentCount1 = +elementQuantity.value;
    let nextCount = currentCount1 + 1;
    elementQuantity.value = nextCount;

    toggleButtonState1 (nextCount);
})


decrementBtnsElem.addEventListener("click", function() {
    let currentCount1 = +elementQuantity.value;
    let nextCount = currentCount1 - 1;
    elementQuantity.value = nextCount;
    
    toggleButtonState1 (nextCount);
})



let decrement = document.querySelectorAll(".decrement")[0];
let increment = document.querySelectorAll(".increment")[0];
let quantity = document.querySelectorAll(".quantity input")[0];
let currentCount2 = +quantity.value;

function Count (count) {
    decrement.disabled = count <= 1;
    increment.disabled = count >= 5;
}

Count (currentCount2);

decrement.addEventListener("click", function () {
    let currentCount2 = +quantity.value;
    let nextCount = currentCount2 - 1;
    quantity.value = nextCount;

    Count(nextCount);
})

increment.addEventListener("click", function () {
    let currentCount2 = +quantity.value;
    let nextCount = currentCount2 + 1;
    quantity.value = nextCount;

    Count (nextCount);
})







 




















 

// let arr = ["html", "css", "js", "ecmas"];

// let arrLength = arr.map ( function (name) {
//     return name.length;
// })
// console.log(arrLength)


// let arr = [1, 2, 3, 4, 5, 6];

// let arrSum = [];

// let result = arr.reduce (function (sum, item) {
//     arrSum.push(sum)
//     return sum+item;
// },0)
// arrSum.push(result)

// console.log(arrSum)



const arr = [1, 2, 3, 4, 5]

const getSums = arr.map(function(num, index) {
return num + index
})

console.log(getSums)
