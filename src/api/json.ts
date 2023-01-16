const importJsonPromise = async () => {
    let json = await fetch('/src/data/data.json')
    return await json.json()
}
export {importJsonPromise}