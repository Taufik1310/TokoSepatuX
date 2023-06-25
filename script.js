const submitForm = document.getElementById('submitForm')
const result = document.getElementById('result')
const resultPrice = document.getElementById('resultPrice')

let prices = []

submitForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const firstPrice = parseFloat(document.getElementById('price1').value)
    const secondPrice = parseFloat(document.getElementById('price2').value)
    const thirdPrice = parseFloat(document.getElementById('price3').value)
    const fourthPrice = parseFloat(document.getElementById('price4').value)

    prices = [firstPrice, secondPrice, thirdPrice, fourthPrice]

    const secondLargest = getSecondLargest(prices)
    result.classList.remove("d-none")
    resultPrice.innerText = secondLargest
})

function getSecondLargest(prices) {
    let largest = 0
    let secondLargest = 0
    
    for (let price of prices) {
      if (price > largest) {
        secondLargest = largest
        largest = price
      } else if (price > secondLargest) {
        secondLargest = price
      }
    }
    
    return secondLargest
}