const listEl = document.querySelector('#categories')
console.log(listEl)
const listItem = [...listEl.children]
console.log(listItem)
console.log(`Number of categories: ${listItem.length}`)

listItem.forEach((el, ind) => {
    console.log(`Category: ${el.firstElementChild.textContent}`)
    console.log(`Elements: ${el.lastElementChild.children.length}`)
})



