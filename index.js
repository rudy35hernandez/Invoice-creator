let tasks = []
console.log(tasks)
let total = 0
let carWash = false
let mowLawn = false
let pullWeeds = false
const carwashBtn = document.querySelector(".car-wash-btn")
const mowLawnBtn = document.querySelector(".mow-lawn-btn")
const pullWeedsBtn = document.querySelector(".pull-weeds-btn")
let totalP = document.getElementById("total")
const servicesSec = document.getElementById('services-sec')

/// this is the div that will contain both p's ///
// const taskDiv = document.createElement("div")
// taskDiv.classList.add('task-div')

// //// these are the paragraphs that will contain the task and price
// const taskSet = document.create("p");
// task.classList.add('task-set')
// const taskPrice = document.create("p")
// taskPrice.classList.add('price-set')
const cashSign = document.createElement("span")
cashSign.classList.add("cash-sign")

cashSign.innerHTML = "$"


function render(arr){
    if(arr){
        for(let i = 0; i < tasks.length; i++){
            
            tasks = []
            const taskDiv = document.createElement("div")
            taskDiv.classList.add("task-div")
            const taskSet = document.createElement("p");
            taskSet.classList.add('task-set')
            const taskPrice = document.createElement("p")
            taskPrice.classList.add('price-set')
            taskSet.textContent = arr[i]
            taskDiv.append(taskSet)
            
         
            
            
            taskDiv.append(taskPrice)
            if(arr[i] === "Wash Car"){
                taskPrice.textContent = `$10`
                taskDiv.append(taskPrice)
            } else if(arr[i] === "Mow Lawn"){
                taskPrice.textContent = `$20`
                taskDiv.append(taskPrice)
            } else{
                taskPrice.textContent = `$30`
                taskDiv.append(taskPrice)
            }
            
            servicesSec.append(taskDiv)
        }
    }
}

carwashBtn.addEventListener("click", function(){
    if(carWash === false){
        tasks.push("Wash Car")
        carWash = true
        total += 10
        totalP.textContent = `$${total}`
        console.log(total)
        render(tasks)
    }
})

mowLawnBtn.addEventListener("click", function(){
    if(mowLawn === false){
        tasks.push("Mow Lawn")
        mowLawn = true
        total += 20
        console.log(total)
        totalP.innerHTML = `$${total}`
        render(tasks)
    }
})

pullWeedsBtn.addEventListener("click", function(){
    if(pullWeeds === false){
        tasks.push("Pull Weeds")
        pullWeeds = true
        total += 30
        console.log(total)
        totalP.innerHTML = `$${total}`
        render(tasks)
    }
    
})

