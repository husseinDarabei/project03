let count=0;
const countDisplay = document.getElementById("count");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");




 


incrementButton.addEventListener("click", function()
{
count = count + 1;
updateCounter();
});

decrementButton.addEventListener("click", function()
{ 
count = count - 1;
updateCounter();
});

resetButton.addEventListener("click", function()
{ 
count = 0;
updateCounter();
});

function updateCounter() {
countDisplay.textContent = count;

if(count > 0) {
countDisplay.style.color="green";
}
else if (count < 0)
{
countDisplay.style.color = "red";
}
else{
countDisplay.style.color = "black";
}
}
