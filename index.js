// function app() {
//     const buttons = document.querySelectorAll('.button')
//     const cards = document.querySelectorAll('.day')

//     function filter (category, items) {
//         items.forEach((item) => {
//             const isItemFiltered = !item.classList.contains(category)
//             const isShowAll = category.toLowerCase() === 'all'
//             if (isItemFiltered && !isShowAll) {
//                 item.classList.add('hide')
//             }else {
//                 item.classList.remove('hide')
//             }
//         })
//     }

//     buttons.forEach((button) => {
//         button.addEventListener('click', () => {
//             const currentCategory = button.dataset.filter
//             filter(currentCategory, cards)
//         })
//     })
// }
// app()






const list = document.querySelector('.filter'),
      items = document.querySelectorAll('.day')
      listItems = document.querySelectorAll('.button')
    
function filter() {
    list.addEventListener('click', event => {
        const targetId = event.target.dataset.id
        const target = event.target

        if(target.classList.contains('button')) {
            listItems.forEach(listItem => listItem.classList.remove('active'))
        target.classList.add('active')
        }
        

        switch(targetId) {
            case 'all':
                getItems('day')
                break
            case 'pn':
                getItems(targetId)
                break
            case 'vt':
                getItems(targetId)
                break
            case 'sr':
                getItems(targetId)
                 break
            case 'cht':
                getItems(targetId)
                 break
             case 'pt':
                getItems(targetId)
                 break
             case 'sb':
                getItems(targetId)
                break                  
        }
        
    })
}
filter()

function getItems(className) {
    items.forEach(item => {
        if (item.classList.contains(className)) {
            item.style.display = "block"
        } else
        item.style.display = "none"
    })
}