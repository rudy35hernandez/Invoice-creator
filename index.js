let tasks = []
console.log(tasks)
let total = 0
let carWash = false
let mowLawn = false
let pullWeeds = false
const carwashBtn = document.querySelector(".car-wash-btn")
const mowLawnBtn = document.querySelector(".mow-lawn-btn")
const pullWeedsBtn = document.querySelector(".pull-weeds-btn")

const servicesSec = document.getElementById('services-sec')

/// this is the div that will contain both p's ///
// const taskDiv = document.createElement("div")
// taskDiv.classList.add('task-div')

// //// these are the paragraphs that will contain the task and price
// const taskSet = document.create("p");
// task.classList.add('task-set')
// const taskPrice = document.create("p")
// taskPrice.classList.add('price-set')




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
            if(arr[i] === "car wash"){
                taskPrice.textContent = 10
                taskDiv.append(taskPrice)
            } else if(arr[i] === "mow lawn"){
                taskPrice.textContent = 20
                taskDiv.append(taskPrice)
            } else{
                taskPrice.textContent = 30
                taskDiv.append(taskPrice)
            }
            
            servicesSec.append(taskDiv)
        }
    }
}

carwashBtn.addEventListener("click", function(){
    if(carWash === false){
        tasks.push("car wash")
        carWash = true;
        
        render(tasks)
    }
})

mowLawnBtn.addEventListener("click", function(){
    if(mowLawn === false){
        tasks.push("mow lawn")
        mowLawn = true
        render(tasks)
    }
})

pullWeedsBtn.addEventListener("click", function(){
    if(pullWeeds === false){
        tasks.push("pull weeds")
        pullWeeds = true;
        render(tasks)
    }
})