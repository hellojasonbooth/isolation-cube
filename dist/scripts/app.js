    
    // spinning cube test stuff here
    const moveCube = () => {

      const cubeTag = document.querySelector('div.cube')

      const x = event.pageX
      const y = event.pageY

      const midX = x - window.innerWidth / 2
      const midY = y - window.innerHeight / 2

      cubeTag.style.left = x + 'px'
      cubeTag.style.top = y + 'px'

      cubeTag.style.transform = "rotateX(" + midY + "deg) rotateY(" + midX + "deg)"
    }

    document.addEventListener('mousemove', function (event) {
      moveCube()
    })

    document.addEventListener("touchmove", function (event) {
      moveCube()
    })


    // quick toggle setup
    const toggleTag = document.querySelector('div.toggle')

    const animateBox = () => {
      const shapeTags = document.querySelectorAll('div.face')

      shapeTags.forEach(tag => {
        tag.classList.toggle('active')
      })

    }

    toggleTag.addEventListener('click', function (){
      animateBox()
    })
