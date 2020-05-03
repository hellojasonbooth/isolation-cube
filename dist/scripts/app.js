    
    
    const cubeTag = document.querySelector('div.cube')
  

    function animate() {

      const cubeTag = document.querySelector('div.cube')

      const x = event.pageX
      const y = event.pageY

      const midX = x - window.innerWidth / 2
      const midY = y - window.innerHeight / 2

      cubeTag.style.left = x + 'px'
      cubeTag.style.top = y + 'px'

      cubeTag.style.transform = "rotateX(" + midY + "deg) rotateY(" + midX + "deg)"
    }


    document.addEventListener('mousemove', function () {
      animate()
    })

    document.addEventListener("touchmove", function () {
      animate()
    })
