import {getFile, writeNewStyle} from './theme'

export default {
    install (Vue, options = {}) {
        let {colors, themePath, afterChange} = options

        if (!Array.isArray(colors)) {
            throw new Error('colors must be Array')
        }

        // 每一种主题所配置的颜色key值必须相等
        for (let i = 0; i < colors.length; i++) {
            let item = colors[i]
            if (!item.hasOwnProperty('name')) {
                throw new Error('Each of themes must contain property `name`')
            }
            if (stringifyObjKey(item) !== stringifyObjKey(colors[0])) {
                throw new Error('Each of themes key must have the same key')
            }
        }

        let themeNamesList = colors.map(item => item.name)

        const changeTheme = themeName => {
            let activeTheme = colors.find(item => item.name === themeName)
            getFile(themePath)
                .then((data) => {
                    let {name, ...keyMap} = activeTheme
                    writeNewStyle(data, keyMap)
                    localStorage.setItem('themeName', themeName)

                    afterChange && afterChange(themeName)
                })
        }
        // 初始化主题
        let initalTheme = localStorage.getItem('themeName')
        // 如果有缓存则取缓存，否则取第一个
        if (initalTheme && themeNamesList.includes(initalTheme)) {
            changeTheme(initalTheme)
        } else {
            changeTheme(themeNamesList[0])
        }

        Vue.prototype.$changeTheme = changeTheme
    }
}

const stringifyObjKey = obj => {
    let arr = []
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            arr.push(key)
        }
    }
    return arr.join(',')
}
