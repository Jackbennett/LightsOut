document.addEventListener("DOMContentLoaded", function(){
  
  
  var board = document.querySelector('section')
  
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
}
