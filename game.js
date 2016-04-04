window.buttonLength = 0

document.addEventListener("DOMContentLoaded", function(){
  
  
  var board = document.querySelector('section')
  
  var button = board.querySelectorAll('button')
  window.buttonLength = board.querySelectorAll('button').length
  for(var i = 0; i < buttonLength; i += 1){
    button[i].id = i
  }

  board.addEventListener("click", function(event){
    var el = event.target
    if(el.tagName === 'BUTTON'){
      adjacent(el)
    }
  })
  
  
})

function adjacent(el){
  if(el.previousElementSibling){
    el.previousElementSibling.classList.toggle('on')
  }

  el.classList.toggle('on')

  if(el.nextElementSibling){
    el.nextElementSibling.classList.toggle('on')
  }

  var id = parseInt(el.id)
  if(id + 5 < window.buttonLength){
    document.getElementById(id + 5).classList.toggle('on')
  }
  if(id - 5 > 0){
    document.getElementById(id - 5).classList.toggle('on')
  }
}
