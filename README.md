# theme

一个基于Vue的切换皮肤插件。



## Usage
```
import Vue from 'vue'
import App from './App'

import Theme from './plugins/Theme/index'

/**

 * 属性说明

 * @themePath {String} 存放所有需要切换主题的元素，仅配置需要跟随主题切换的属性
 * @colors {Array} 所要应用的主题色数组，注意：每一组的key必须相同
 * @afterChange {Funtion} 切换成功后回调，参数curThemeName为当前主题的key
 */

const themeConfig = {
    themePath: `/static/theme.css`,
    colors: [
        {
            name: 'theme1', // 当前主题名称
            primary: '#B7A3FF',// 该主题下的颜色集合，key与颜色值对应
            secondary: '#879FFF',
            thirdly: '#8981D8'
        }, {
            name: 'theme2',
            primary: '#FDC5C5',
            secondary: '#F070A0',
            thirdly: '#E7829F'
        }, {
            name: 'theme3',
            primary: '#414D6C',
            secondary: '#2D1E3C',
            thirdly: '#423C50'
        }
    ],
    afterChange: (curThemeName) => {
        console.log(`current theme is ${curThemeName}`)
    }

}

Vue.use(Theme, themeConfig)
```

```
<template>
    <div class="top-bar">
        <div class="btn"
             v-for="item in themeList"
             :key="item"
             @click="changeTheme(item)">
          {{item}}
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            // 可选主题
            themeList: ['theme1', 'theme2', 'theme3']
        }
    },
    methods: {
        changeTheme (data) {
            this.$changeTheme(data) // 调用
        }
    }
}
</script>

```

#### /static/theme.css
```
.hello-title {
  background-color: '{primary}' !important;
}

.hello-subtitle {
  background-color: "{secondary}" !important;
}

.hello-list {
  color: {thirdly} !important;
}

.btn {
  background-color: '{primary}' !important;
}


```



