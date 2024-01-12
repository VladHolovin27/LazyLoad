// const { entries } = require("lodash");

document.addEventListener('scroll', () => {
    const images = document.querySelectorAll('img');
    const options = {
        rootMargin: '10px',
        threshold: 0.9
    };
    
    function lazyLoaded(load) {
        const imagesObserve = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    const img = entry.target;
                    console.log(img);
                    const srcImg = img.getAttribute('data-src')

                    img.src = srcImg;
                    img.classList.add('loadImageOnSite')
                    observer.unobserve(img)
                }
            })
            }, options)
            imagesObserve.observe(load)
    }
    images.forEach((image) => {
        lazyLoaded(image)
    })
})

// document.addEventListener('mouseover', () => {
//         const boxes = document.querySelectorAll('div');
//         const options = {
//             rootMargin: '10px',
//             threshold: 0.9
//         }

//         const boxesObserve = new IntersectionObserver((entries, observer) => {
//             entries.forEach((entry) => {
//                 if(entry.isIntersecting){
//                     entry.target.classList.add('hover')
//                 }
//                 else {
//                     entry.target.classList.remove('hover')
//                 }
//             })
//         }, options)

//         boxes.forEach((box) => {
//             boxesObserve.observe(box)
//         })
// });
