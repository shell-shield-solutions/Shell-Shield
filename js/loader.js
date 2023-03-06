// WIP, reusable component loading

const loadComponent = (target, path) => {
    fetch(path)
        .then((response) => { return response.text(); })
        .then((result) => {
            let parser = new DOMParser(),
                data = parser.parseFromString(result, 'text/html'),
                component = data.body.querySelector('div')

            if ((component) !== null) {
                document.querySelector(target).append((component))
            }
        })
}

export default loadComponent