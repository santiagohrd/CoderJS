const options = ['1. Credito de libre inversión', '2. Abonar a cuenta', '3. Salir']
const countAmount = []
const userChose = parseInt(prompt(`Seleccione la opción deseada ${options}`))


function lInversion(rate, nperiod, amount){
    const ratePercentage = rate/100
    const monthlyRate = (ratePercentage / 12)
    const fee = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -nperiod))
    return fee
}

function addAmount(monto){
    const payment = parseFloat(prompt('Monto a agregar: '))
    countAmount.push(payment)
    return console.log(countAmount)
}

switch (userChose){
    case 1:
        const rate = parseFloat(prompt('Tasa de interés:'))
        const nperiod = parseInt(prompt('Meses del credito:'))
        const amount = parseFloat(prompt('Valor a solicitar:'))
        lInversion(rate, nperiod, amount)
        break
        case 2:
            addAmount()
            break
        } 