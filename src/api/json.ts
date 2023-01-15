const importJsonPromise = async () => {
    return fetch('/src/data/data.json').then( res=>res.json() )
}
export {importJsonPromise}