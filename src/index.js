console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
    imgFetch()
    breedFetch()


})
let keys = []

document.addEventListener('click', e => {
    if (e.target.matches('li')) {
        e.target.style.color = 'red'
    }
})

document.addEventListener('change', e => {
    if (e.target.matches('#breed-dropdown')) {
        const ul = document.getElementById('dog-breeds')
        ul.innerHTML = ''
        const filteredBreeds = keys.filter(key => key[0] === e.target.value)
        addBreedNameToDOM(filteredBreeds)

    }
})

function imgFetch() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
        .then(res => res.json())
        .then(res => {
            res.message;
            const dogImageContainer = document.getElementById('dog-image-container');
            res.message.forEach((url => {
                const img = document.createElement('img');
                img.src = url
                dogImageContainer.append(img)
            }))
        })
}

function breedFetch() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all"
    fetch(breedUrl)
        .then(res => res.json())
        .then(res => {
            keys = Object.keys(res.message)
            addBreedNameToDOM(keys)


        })



}

function addBreedNameToDOM(keys) {
    const ul = document.getElementById('dog-breeds')
    keys.map((key => {
        let li = document.createElement('li')
        li.textContent = key;
        ul.append(li)


    }))
}