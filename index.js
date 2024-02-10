function mostrarResultados(results) {
    const contenedor = document.querySelector('.results-list')
    const template = document.querySelector('#result-item-template')
    const resultsCounter = document.querySelector('.results-count')
    resultsCounter.textContent = results.length

    for (const r of results) {
        console.log(r)
        const titleEl = template.content.querySelector('.titulo-card')
        titleEl.textContent = r.title

        const conditionEl = template.content.querySelector('.estado-card')
        conditionEl.textContent = r.condition

        const priceEl = template.content.querySelector('.precio')
        priceEl.textContent = Math.floor(r.price)

        const imgEl = template.content.querySelector('.img')
        imgEl.src = r.thumbnail;

        const vendidosEl = template.content.querySelector('.vendidos-card')
        vendidosEl.textContent = r.available_quantity

        const linkEl = template.content.querySelector('.vinculo-item')
        linkEl.href = r.permalink

        const clone = document.importNode(template.content, true)
        contenedor.appendChild(clone)
    }
}

function main() {
    const formEl = document.querySelector('form')
    formEl.addEventListener('submit', (e) => {
        e.preventDefault()
        const palabraABuscar = e.target.busqueda.value
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=' + palabraABuscar)
            .then(res => res.json())
            .then(data => mostrarResultados(data.results))
    })
    //mostrarResultados([1, 2])
}

main();