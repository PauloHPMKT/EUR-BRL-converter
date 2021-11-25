//cashe selectors =============================================================================
const euroField = document.querySelector('#euroAmount')
    //const priceOfTheDay = document.querySelector('span')
const btnConverter = document.querySelector('#btnConverter')
const btnClean = document.querySelector('#btnClean')
const result = document.querySelector('#result')

//api url Fixer.io ============================================================================
const urlApiKey = 'https://economia.awesomeapi.com.br/last/EUR-BRL'


// new feature - priceOfTheDay.innerHTML = `Cotação do dia: ${(euroAmount).toFixed(2)}`

//fetch api function ==========================================================================
function converter() {
    fetch(urlApiKey)
        .then(res => res.json())
        .then(data => {
            const euroAmount = data.EURBRL.bid
            const euro = euroField.value
            const real = (euro * euroAmount).toFixed(2)

            if (euro !== '') {
                result.innerHTML = `Valor convertido: € ${euro} <br> Valor total: R$ ${real}`
            } else {
                result.innerText = `Digite um valor.`
            }
        })
        .catch(err => console.error(`Ops, deu erro!`, err))
}

//events =====================================================================================
btnConverter.addEventListener('click', converter)
btnClean.addEventListener('click', cleanResult)

//clean functions ======================================================================
function cleanResult() {
    result.innerHTML = ''
    euroField.value = ''
}