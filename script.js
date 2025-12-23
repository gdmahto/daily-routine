const checkBox = document.querySelectorAll('.checkBox1')
const input = document.querySelectorAll('.input1')
const erroR = document.querySelector('.error')
const progresValue = document.querySelector('.progress-value')
const progresValueSpan = document.querySelector('.progress-value span')

let progresWidth = 0
let i = 0







checkBox.forEach((checkBox) => {
    checkBox.addEventListener('click', () => {
        let inputArray = [...input].every((inpuT) => {
            return inpuT.value
        })
        if (inputArray) {
            progresWidth += 100 / 3
            i++

            if (progresWidth <= 100) {
                progresValue.style.width = `${progresWidth}%`
                progresValueSpan.classList.add('span')
                progresValueSpan.textContent = `${i}/3 Completed`

            }
            checkBox.parentElement.classList.toggle('completed')
        } else {
            erroR.classList.add('errorOn')
        }
    })
})
input.forEach((input) => {
    input.addEventListener('focus', () => {
        erroR.classList.remove('errorOn')
    })
})