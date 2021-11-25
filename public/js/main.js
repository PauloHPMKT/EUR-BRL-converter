//cashe selectors =============================================================================
const euroField = document.querySelector('#euroAmount')
const realField = document.querySelector('#realAmount')
const btnConverter = document.querySelector('#btnConverter')

//api url Fixer.io ============================================================================
const urlApiKey = 'http://data.fixer.io/api/latest?access_key=4db85286f1814f557cd74c6881892ffe'

//fetch api function ==========================================================================
function converter() {
    fetch(urlApiKey)
    .then(res => res.json())
    .then(data => {
        const euroAmount = data.rates.BRL
        const euro = euroField.value
        const real = (euro * euroAmount).toFixed(2)

        alert(real)
    })
    .catch(err => console.error(`Ops, deu erro!`, err))
      
}

//events =====================================================================================
btnConverter.addEventListener('click', converter)
