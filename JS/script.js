console.log('Hello!')
const shoppingList = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola','pesca','cipolla','pera']

let i = 0
const ulElement = document.querySelector("ul")
while (i < shoppingList.length) {
    const liApp = document.createElement("li")
    const liElement = ulElement.appendChild(liApp)
    liElement.innerHTML = shoppingList[i]
    i++;
}