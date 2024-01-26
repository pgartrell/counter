

let count = 0

let countEl = document.getElementById("count-el")

function increment_up() {
    count += 1
    countEl.innerText = count
    console.log(count)
}

increment_up()

function decrease_down() {
    if (countEl.innerText > 0) {
        count -= 1
        countEl.innerText = count
        console.log(count)
    } else {
        count
    }
}

decrease_down()

let saveEl = document.getElementById("save-el")

function save() {
    //saved_entries keeps each value of the previous text. So it will not erase the values before it, but just continue to add values onto it. 
    let saved_entries = count + " - "

    saveEl.textContent += saved_entries

    countEl.textContent = 0
    count = 0
    

}

save()

