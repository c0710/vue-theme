function getFile (url, isBlob = false) {
    return new Promise((resolve, reject) => {
        const client = new XMLHttpRequest()
        client.responseType = isBlob ? 'blob' : ''
        client.onreadystatechange = () => {
            if (client.readyState !== 4) {
                return false
            }
            if (client.status === 200) {
                resolve(client.response)
            } else {
                reject(new Error(client.statusText))
            }
        }
        client.open('GET', url)
        client.send()
    })
}

function writeNewStyle (originalStyle, colors) {
    let oldEl = document.getElementById('temp-style')
    let cssText = originalStyle

    Object.keys(colors).forEach(key => {
        cssText = cssText.replace(new RegExp('[\'\"]{0,1}{' + key + '}[\'\"]{0,1}'), colors[key])
    })

    const style = document.createElement('style')
    const styleContentNode = document.createTextNode(cssText)
    style.appendChild(styleContentNode)
    style.id = 'temp-style'
    oldEl ? document.head.replaceChild(style, oldEl) : document.head.appendChild(style)
}

export {getFile, writeNewStyle}
