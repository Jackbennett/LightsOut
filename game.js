document.addEventListener("DOMContentLoaded", function(){
  
  
  var board = document.querySelector('section')
  
  board.addEventListener("click", function(event){
    var el = event.target
    if(el.tagName === 'BUTTON'){
      el.classList.toggle('on')
    }
  })
  
  
})