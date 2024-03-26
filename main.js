const toggleButton = document.querySelector('.toggle-button');
const rangeInput = document.getElementById("amount")
const rangeValue = document.querySelector(".value");

rangeValue.innerHTML = `$16.00`
let value = ""

toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle("active-toggle")

    if(toggleButton.classList.contains("active-toggle")){
        let discount = rangeInput.value  * 0.25
        value = rangeInput.value - discount
        rangeValue.innerHTML = `$${value}.00`
    }
    else{
        value = rangeInput.value
        rangeValue.innerHTML = `$${value}.00`
    }
})

rangeInput.addEventListener("input", () => {
    value = rangeInput.value;
    rangeValue.innerHTML = `$${value}.00`;

    if(toggleButton.classList.contains("active-toggle")){
        let discount = rangeInput.value  * 0.25
        value = rangeInput.value - discount
        rangeValue.innerHTML = `$${value}.00`
    }else{
        value = rangeInput.value
        rangeValue.innerHTML = `$${value}.00`
    }
})