// WIP, reusable component loading

const loadComponents = (target, path) => {
    fetch(path)
        .then((response) => { return response.text(); })
        .then((result) => {
            let parser = new DOMParser(),
                data = parser.parseFromString(result, 'text/html'),
                component = data.body.querySelector(target)

            for (let i = 0; i < component.childElementCount; i++) {
                console.log(component.children[i])
                // document.querySelector(target).append(component.children[i])

            }

            // document.querySelector(target).append(component)
        })
}

export default loadComponents