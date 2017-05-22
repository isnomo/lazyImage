# lazyImage原生JS图片懒加载
### 引入js文件
```html
<script src="js/lazyImage.js"></script>
```
### html范例
```html
<ul>
    <li>
        <img class="lazyimg" src="img/temp.jpg" data-lazysrc="img/01.jpg" >
    </li>
    <li>
        <img class="lazyimg" src="img/temp.jpg" data-lazysrc="img/02.jpg" >
    </li>
    <li>
        <img class="lazyimg" src="img/temp.jpg" data-lazysrc="img/03.jpg" >
    </li>
    <li>
        <img class="lazyimg" src="img/temp.jpg" data-lazysrc="img/04.jpg" >
    </li>
    <li>
        <img class="lazyimg" src="img/temp.jpg" data-lazysrc="img/05.jpg" >
    </li>
    <li>
        <img class="lazyimg" src="img/temp.jpg" data-lazysrc="img/06.jpg" >
    </li>
</ul>
```
初始化选项
```js
lazyImage({       
    //class选择器的名称
    selector : 'lazyimg',
    //自定义属性的名称
    dataAtt : 'data-lazysrc',
    //滚轴延迟监听时间
    delayTime : 300,
    //判断距离显示窗口的偏移量
    offsetScroll : 100
});
```
因为技术有限，有待更好的优化，如有不足欢迎指点。