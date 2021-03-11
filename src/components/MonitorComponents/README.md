# 组件使用方法

> ## m-grid
>
> | 参数     | 说明                                                                     | 类型    |
> | -------- | ------------------------------------------------------------------------ | ------- |
> | template | grid 布局排列, 需要给布局的元素加 area 名称                              | Array   |
> | columns  | 列比例                                                                   | String  |
> | rows     | 行比例                                                                   | String  |
> | gap      | 间距                                                                     | String  |
> | bgImg    | 背景图片 src                                                             | String  |
> | complete | (可选)默认为 true，传入 false 则启动 loading 图，待地图加载后再置为 true | Boolean |

```html
<m-grid
  :template="[
    'title title title',
    'box1 box4 box4',
    'box1 . box3',
    'box2 box2 box3',
  ]"
  columns="1fr 1fr 1fr"
  rows="5rem 1fr 1fr 1fr"
  gap="0.5rem"
>
  <h1 area="title">示例代码</h1>
  <div area="box1" style="background-color: red" />
  <div area="box2" style="background-color: green" />
  <div area="box3" style="background-color: yellow" />
  <div area="box4" style="background-color: blue" />
</m-grid>
```

---

> ## m-title
>
> | 参数     | 说明                       | 类型    |
> | -------- | -------------------------- | ------- |
> | bgImg    | 标题背景                   | IMG     |
> | hideDate | 是否隐藏日期，默认为 false | Boolean |
> | hideTime | 是否隐藏时间，默认为 false | Boolean |
> | editable | 日期是否可选，默认为 false | Boolean |
> | color    | 标题颜色，默认为#25e7f6    | String  |
> | size     | 标题大小，默认为 2.8rem    | String  |

```html
<m-title :bgImg="require('@/assets/images/title-bg.png')"
  >小区公共安全监控场景</m-title
>
```

---

> ## m-card
>
> | 参数  | 说明                                | 类型             |
> | ----- | ----------------------------------- | ---------------- |
> | mode  | 容器的类型，目前有 4 种，默认为'1'  | [String, Number] |
> | title | 容器标题，默认为‘标题’              | String           |
> | color | 标题颜色                            | String           |
> | enter | 容器的进入动画，默认为 fadeInRight  | String           |
> | leave | 容器的退出动画，默认为 fadeOutRight | String           |
> | icon  | mode3 中独有的，标题图标            | IMG              |
> | area  | 被包裹在 m-grid 中布局时需要用到    | String           |

```html
<m-card title="测试" area="card1">
  内容
</m-card>
```

---

> ## m-animate
>
> | 参数  | 说明                     | 类型   |
> | ----- | ------------------------ | ------ |
> | enter | 包裹容器的进入、显示效果 | String |
> | leave | 包裹容器的离开、消失效果 | String |

```html
<m-animate v-show="show" enter="fadeInLeft" leave="fadeOutRight">
  <div>动画效果容器</div>
</m-animate>
```

---

> ## m-count
>
> | 参数           | 说明                                                          | 类型    |
> | -------------- | ------------------------------------------------------------- | ------- |
> | value          | 跳转数字值                                                    | Number  |
> | decimal        | 保留小数点后几位，默认为 2                                    | Number  |
> | prefix         | 数字前缀，默认为空                                            | String  |
> | suffix         | 数字后缀，默认为空                                            | String  |
> | size           | 字体大小，默认为 1rem                                         | String  |
> | color          | 字体颜色，默认为#fff                                          | String  |
> | autoUpdate     | 是否定时让数字自动跳一跳，默认为 false                        | Boolean |
> | updateDuration | autoUpdate 为 true 时可用，定时跳的间隔，单位为分钟，默认为 1 | Number  |

```html
<m-count size="2rem" :value="1000" prefix="$" autoUpdate />
```

---

> ## m-flip
>
> | 参数  | 说明                  | 类型   |
> | ----- | --------------------- | ------ |
> | value | 翻牌数字值            | Number |
> | color | 字体颜色，默认为#fff  | String |
> | size  | 字体大小，默认为 1rem | String |

```html
<m-flip :value="1000" size="3rem" />
```

---

> ## m-drawer
>
> | 参数  | 说明                                    | 类型    |
> | ----- | --------------------------------------- | ------- |
> | value | 抽屉是否显示，可用 v-model 双向数据绑定 | Boolean |
> | width | 抽屉宽度，默认为 40%                    | String  |
> | enter | 抽屉的进入效果，默认为 fadeInRight      | String  |
> | leave | 抽屉的离开效果，默认为 fadeOutRight     | String  |

| 事件  | 说明           | 返回值 |
| ----- | -------------- | ------ |
| close | 抽屉关闭时触发 | 无     |

```html
<m-drawer v-model="showDrawer" @close="doSomething">内容</m-drawer>
```

---

> ## m-modal
>
> | 参数  | 说明                                    | 类型    |
> | ----- | --------------------------------------- | ------- |
> | value | 弹窗是否显示，可用 v-model 双向数据绑定 | Boolean |
> | width | 弹窗宽度，默认为 40%                    | String  |
> | enter | 弹窗的显示效果，默认为 zoomInUp         | String  |
> | leave | 弹窗的消失效果，默认为 zoomOutDown      | String  |

| 事件  | 说明           | 返回值 |
| ----- | -------------- | ------ |
| close | 弹窗关闭时触发 | 无     |

```html
<m-modal v-model="showModal" @close="doSomething">内容</m-modal>
```

---

> ## m-step

| 参数    | 说明                           | 类型             |
| ------- | ------------------------------ | ---------------- |
| steps   | 步骤列表                       | Array[Object]    |
| -       | name:节点名称                  | String           |
| current | 当前进度节点                   | [Number, String] |
| msg     | (可选)其他信息，显示在节点下方 | Array[String]    |

```html
<m-step
  :steps="[{name: '报警'},{name: '通知'},{name: '处置完成'}]"
  :current="1"
/>
```

---

> ## m-scroll

| 参数     | 说明                                                 | 类型             |
| -------- | ---------------------------------------------------- | ---------------- |
| length   | 数据长度                                             | Number           |
| limit    | 临界点，大于此值则滚动，默认为 6                     | Number           |
| duration | 间隔时间，默认为 3000                                | Number           |
| mode     | 默认为 1，即向上滚动。2 为不断将第一个元素高度置为 0 | [Number, String] |
| step     | mode2 模式下必填，每次向上滚动的距离                 | Number           |

```html
<m-scroll :length="10" mode="2">
  <div v-for="i in 10" :key="i" style="height: 5rem;margin-bottom:0.5rem;">
    {{i}}
  </div>
</m-scroll>
```

---

> ## m-map

_地图参数_

| 参数    | 说明                                                                                                         | 类型   |
| ------- | ------------------------------------------------------------------------------------------------------------ | ------ |
| mapUrl  | 地图 html 链接，默认为'http://www.962121.net/gis_system/smimap/index.html#/'                                 | String |
| mapJs   | 地图 Js 链接，默认为'http://www.962121.net/gis_system/smimap/mapdebug/ShsmiGis.Bridge.js'                    | String |
| iconUrl | 图标链接前缀，默认为'http://www.962121.net/hmfmstest/shanghaiwuye/web/dataV/propertyinspector/static/icons/' | String |

_地图触发事件_

| 事件     | 说明                                             | 返回值 |
| -------- | ------------------------------------------------ | ------ |
| complete | 地图创建完成，所有的地图操作应在创建完成之后执行 | 无     |
| event    | 地图点击触发                                     | Object |

_地图方法_

| 方法           | 说明         | 参数                                                 |
| -------------- | ------------ | ---------------------------------------------------- |
| addPoint       | 地图撒点     | [{name, key, data, labelKey, icon, size, color}](#1) |
| removePoint    | 移除地图撒点 | [name](#1)                                           |
| addGifPoint    | 添加动态点   | [{name, data, labelKey, icon, size, color}](#1)      |
| removeGifPoint | 移除动态点   | [name](#1)                                           |
| focus          | 地图聚焦定位 | [x, y, zoom](#1)                                     |
| zoomIn         | 地图放大一级 | 无                                                   |
| zoomOut        | 地图缩小一级 | 无                                                   |

<i id="1">方法参数对照</i>

| 方法参数 | 说明                                                       | 类型   |
| -------- | ---------------------------------------------------------- | ------ |
| name     | （必填）图层名称                                           | String |
| key      | （必填）数据的唯一标识                                     | String |
| data     | （必填）撒点的数据                                         | Array  |
| labelKey | （可选）传入则显示标签，取数据中该键对应的值               | String |
| icon     | （必填）图标名                                             | String |
| size     | （可选）图标大小，静态点默认为 20，动态点默认为 200        | Number |
| color    | （可选）变迁颜色，静态点默认为#47B3FF，动态点默认为#00FFFF | String |
| x        | （必填）x 坐标                                             | String | Number |
| y        | （必填）y 坐标                                             | String | Number |
| zoom     | （可选）默认为 6                                           | Number |

```html javascript
<template>
  <m-map ref="map" @complete="initMap" @event="handleEvent" />
</template>

<script>
  export default {
    name: "Test",
    methods: {
      initMap() {
        const data = [{ x: 1000, y: 1000, id: "a-point", label: "测试点" }];
        this.$refs.map.addPoint({
          name: "test",
          key: "id",
          data,
          labelKey: "label",
          icon: "blue.png"
        });
      },
      handleEvent(e) {
        const { x, y } = e.data[0];
        this.$refs.map.focus(x, y);
      }
    }
  };
</script>
```

---

> ## m-chart
>
> | 参数   | 说明               | 类型   |
> | ------ | ------------------ | ------ |
> | data   | 构成图表的数据     | Array  |
> | config | [图表配置参数](#2) | Object |

<i id="2">config 参数</i>

| 参数   | 说明                                                                                                      | 类型     |
| ------ | --------------------------------------------------------------------------------------------------------- | -------- |
| colors | （可选）定义颜色组，当数组中的项为数组时则为渐变                                                          | Array    |
| legend | 图例标签                                                                                                  | Object   |
| -      | hide：隐藏图例，默认为 false                                                                              | Boolean  |
| -      | align：水平对齐方式，默认为 center，可选 left、right                                                      | String   |
| -      | orient：图例布局朝向，默认为 horizontal，可选 vertical                                                    | String   |
| shape  | 图表类型配置                                                                                              | [Object] |
| -      | key：据此从数据中取值                                                                                     | String   |
| -      | name：用做图例显示的名称                                                                                  | String   |
| -      | type：图表类型，**_为‘pie’时传入的 data 需是[{name:'name', value: 'value'}]格式_**                        | String   |
| -      | barWidth：bar 图柱状的宽度，默认为 50%                                                                    | String   |
| -      | barGap：bar 图两个柱状之间的间隙，默认为 0                                                                | Number   |
| -      | smooth：line 图平滑度，默认为 true                                                                        | Boolean  |
| -      | symbol：line 图点标记，默认为 circle                                                                      | Boolean  |
| -      | stack：堆积柱图是需要定义此值                                                                             | String   |
| -      | yAxisIndex：定义此值后会成为双 y 轴图表                                                                   | String   |
| xAxis  | x 坐标轴                                                                                                  | Object   |
| -      | key：用于从数据中确定哪个值为横坐标轴值                                                                   | String   |
| yAxis  | y 坐标轴                                                                                                  | Object   |
| -      | key：用于从数据中确定哪个值为纵坐标轴值，**_在 yAxis 上定义此值则使横纵坐标轴对调，双 y 轴模式下不适用_** | String   |

```html javascript
<template>
  <m-card title="测试图表">
    <m-chart :config="config" :data="data" />
  </m-card>
</template>

<script>
  export default {
    name: "Test",
    data() {
      return {
        config: {
          colors: [["#FFCE34", "#00F2FF"], "#1890FF", "red"],
          legend: {
            align: "right"
          },
          shape: [
            {
              key: "dog",
              name: "狗",
              type: "bar",
              barWidth: "30%",
              yAxisIndex: "1"
            },
            {
              key: "cat",
              name: "猫",
              type: "bar",
              barWidth: "30%",
              yAxisIndex: "1"
            },
            { key: "fish", name: "鱼", type: "line" }
          ],
          xAxis: {
            key: "date"
          }
        },
        data: [
          { date: "Mon", dog: 40, cat: 30, fish: 12 },
          { date: "Tue", dog: 50, cat: 60, fish: 14 },
          { date: "Wed", dog: 60, cat: 70, fish: 16 },
          { date: "Thu", dog: 30, cat: 30, fish: 18 },
          { date: "Fri", dog: 50, cat: 70, fish: 16 },
          { date: "Sat", dog: 80, cat: 50, fish: 14 },
          { date: "Sun", dog: 70, cat: 60, fish: 10 }
        ]
      };
    }
  };
</script>
```
