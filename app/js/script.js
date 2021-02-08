const accordions = document.querySelectorAll('.card__accordion__item__title')


accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        if (accordion.classList.contains('open')) {
            accordion.classList.remove('open')
        }
        else {
            //closeAccordions()
            accordion.classList.add('open')
        }
    })
})

// function closeAccordions() {
//     accordions.forEach(accordion => {
//         accordion.classList.remove('open')
//     })
// }