const getTips = () => {
  return fetch('/tips')
    .then(res => res.json())
    .then((tips) => {
      const $toolTips = document.querySelectorAll('.tip')
      $toolTips.forEach($toolTip => {
        tips
          .forEach(tip => {
            if ($toolTip.getAttribute('data-tooltip') === tip.id) {
              $toolTip.setAttribute('data-tooltip', tip.tip)
            }
          })
        $toolTip.addEventListener('mouseenter', (event) => {
          const { top, left, bottom, right } = event.target.getBoundingClientRect()
          if (window.innerHeight - bottom > 25 && window.innerWidth - right > 30) {
            $toolTip.classList.remove('top', 'left')
            $toolTip.classList.add('bottom')
            console.log(tips[0].tip)
          }
          else if (top > 20 && window.innerWidth - right > 30) {
            $toolTip.classList.remove('bottom', 'left')
            $toolTip.classList.add('top')
          }
          else if (left > 20 && window.innerWidth - right < 1352.5) {
            $toolTip.classList.remove('bottom', 'top')
            $toolTip.classList.add('left')
          }
        })
      })
    })
}

getTips()
