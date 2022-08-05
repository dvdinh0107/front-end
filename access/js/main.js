// show hiden input search

let search = document.querySelector('.search--icon');
let searchInput = document.querySelector('.search-input');
    
function InputSearch(){
    searchInput.classList.toggle('active')
}
search.addEventListener('click',InputSearch)

//drop down 


let drop = document.querySelector('.drop')
let dropbtn = document.querySelector('.drop--list')

    dropbtn.onclick = function (){
        drop.classList.toggle('active')
    }

//auto increment

function animateNumber(finalNumber, delay, startNumber = 0, callback) {
    let currentNumber = startNumber
    const interval = window.setInterval(updateNumber, delay)
    function updateNumber() {
      if (currentNumber >= finalNumber) {
        clearInterval(interval)
      } else {
        currentNumber++
        callback(currentNumber)
      }
    }
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    animateNumber(1200, 50, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('transaction-count').innerText = formattedNumber
    })
    
    animateNumber(3000, 50, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('designs').innerText = formattedNumber
    })
    
    animateNumber(9000, 50, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('clients').innerText = formattedNumber
    })
    animateNumber(169 , 50, 0, function (number) {
        const formattedNumber = number.toLocaleString()
        document.getElementById('awards').innerText = formattedNumber
      })
  })

  //
  var menuIcon = document.querySelector('.icon');
  var menu = document.querySelector('.nav')


  menuIcon.onclick = function(){
    menu.classList.toggle ('active')
  }