let dieRolls = []
let sum = 0
let positiona = 0

let numDice = document.querySelector("#dice")
let rollbtn = document.querySelector("#rollButton")
let span = document.querySelector('#total')
let allList = document.querySelector('#allRollsList')
let allRollsbtn = document.querySelector('#allRolls')
let resetb = document.querySelector('#resetBtn')


    rollbtn.addEventListener('click', function () {
        let userInput = Number (numDice.value)

        while (positiona < userInput) {
            let I = Math.floor(Math.random() * 6) + 1
            dieRolls.push (I)
            sum += dieRolls [positiona]

            positiona += 1
        }


    
        span.innerHTML = sum

    })


    allRollsbtn.addEventListener('click', function() {
        allList.innerHTML = ''
        positiona = 0
        while (positiona < dieRolls.length) {
            allList.innerHTML += '<li>' + dieRolls [positiona] + '</li>' 

            positiona += 1
        }



    })

})
 
