const stepcontainers = document.querySelectorAll('.stepcontainer')

window.addEventListener('scroll', ckeckSteps)
ckeckSteps()
function ckeckSteps() {
   const triggerBottom = window.innerHeight / 5 * 3
   stepcontainers.forEach(stepcontainer => {
    const stepcontainerTop = stepcontainer.getBoundingClientRect().top
      if(stepcontainerTop < triggerBottom ) {
        stepcontainer.classList.add('show')} else {
        stepcontainer.classList.remove('show') 
        }
   }
   )

}

