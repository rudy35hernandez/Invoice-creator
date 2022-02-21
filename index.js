let tasks = []
let total = 0
let carWash = false
let mowLawn = false
let pullWeeds = false
const carwashBtn = document.querySelector(".car-wash-btn")
const mowLawnBtn = document.querySelector(".mow-lawn-btn")
const pullWeedsBtn = document.querySelector(".pull-weeds-btn")


carwashBtn.addEventListener("click", function(){
    if(carWash === false){
        tasks.push("car wash")
        total += 10;
        carWash = true;
        console.log(tasks)
    }
})

mowLawnBtn.addEventListener("click", function(){
    if(mowLawn === false){
        tasks.push("mow lawn")
        total += 20
        mowLawn = true;
        console.log(tasks)
    }
})

pullWeedsBtn.addEventListener("click", function(){
    if(pullWeeds === false){
        tasks.push("pull weeds")
        total += 30
        pullWeeds = true;
        console.log(tasks)
    }
})

/// Need to add code to display each array item to the dom as it's added to the array
