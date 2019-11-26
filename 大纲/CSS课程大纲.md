# CSS 课程大纲

* 买书：css权威指南第三版，the book of css3第二版，JavaScript编程精解，Eloquent JavaScript

* HTML的默认样式并不好看，如何才能做出漂亮的界面（User Interface）呢？
* 以前（现在也），标签的属性可以给该标签提供一定的样式：
* 甚至是一些标签本身就自带样式，如 center
* 如body,table标签
  ```html
  <body link="aqua"
        a(ctive)link="red"
        v(isited)link="grey"
        background="bg.jpg"
        bgcolor="yellow"
        leftmargin="10%"
        bottommargin="100"
        text="green">

        <p><font color=red face="" size="">The quick brown</font></p>
        <p><font color=red face="" size="">The quick brown</font></p>
        <p>The quick brown</p>
        <h1></h1>
        <p>The quick brown</p>
        <p>The quick brown</p>
        <p>The quick brown</p>
        <p>The quick brown</p>
        <p>The quick brown</p>


    <em>foo bar <u>bazzz</em> lwjeof jowef</u>

    <a href="">fox jumps over</a>
    <center></center>
    <table
       <%  include('table-style.txt') %>
        >
        <col>
        <tr>
            <td>001</td>
            <td>002</td>
            <td>003</td>
        </tr>
        <tr>
            <td>001</td>
            <td>002</td>
            <td>003</td>
        </tr>
        <tr>
            <td>001</td>
            <td>002</td>
            <td>003</td>
        </tr>
        <tr>
            <td>001</td>
            <td>002</td>
            <td>003</td>
        </tr>
        <tr>
            <td width="200">001</td>
            <td>002</td>
            <td>003</td>
        </tr>

    </table>
    <img src="" width="50%">
  </body>
  ```



* 但是存在很多问题，例如
    * 可以控制的样式太少
        * color
        * bgcolor
        * width
        * border
        * 等
    + 以及违背了DRY原则（Don't Repeat Yourself）
        * 我们只是Github的搬运工
    * 即只对为其写样式的标签有效，想要给多个标签上样式，就得写在多个标签上面
        * 比如想要让所有的段落都成红色，就得在每个p标签上加上color=red
        * 而使用css，`p {color: red;}` 就可以让所有的段落都变成红色
    * 样式不能夸页面复用，跟上一条类似
        - 虽然使用一些服务端的技术可以达到标签属性的样式复用目的，但是流量依然会有所浪费（p12）
            + 而使用css，同一个站点的多个页面可以共享一个css文件，会显著的节省流量，因为只会下载一次
                * 然而，很可能使用了css后流量会上升，因为会你会写很多的css，而一般并不会在html标签上加很多样式
                * 安迪·比尔定律
                * 摩尔定律 硬件的能力每18个月*2，价格减半
        * 使用css，一个css文件可以同时被多个不同的页面使用
        * 同时因为缓存，还能起到减少网络流量的目的
    * 各种度量单位不能选，只能以像素和百分比为单位
        * px rem em ch ex vh fr in cm mm %
    * 甚至连透明都实现不了
    * 样式各种单一
        - 比如所有的链接只能有一个颜色，等等
            * 当然，可以包在font标签里实现多色。。。
            * <a href=""><font color="blue">download</font></a>
    * 无法灵活实现布局
    * 或者很多效果用图片实现
        * <input type="image" src="button.png">
        * 可维护性很差
            * 什么叫可维护性？
                * 即修改以及被他人理解的难易程度

* 没有银弹

* CSS to the RESCUE
    - 什么是CSS？
        + Cascading Style Sheet
        + 层叠 样式 表
            * 层叠在这里是什么意思呢？（p12）
                * 冲突处理
                    * 不是代码合并冲突
                    * 而是说对同一个元素指定了不同的样式，哪一个生效
                * 样式是可以继承的
    * CSS能在哪些方面对UI的实现做出提升呢？
    * 更多类型的样式
        * 如背景图片
        * 阴影
        * 内外边距，边框
        * 各种各种
    * 方便的控制页面的布局
        * 原来是用table
    * 更精细的样式
        - CSS的属性高达上百个，可以控制页面上几乎**任意一个像素**
    * Desgined for UI，专为UI开发设计（一般来说现在的平面设计专业也会学习CSS）
        * 浏览器渲染(render)引擎的配置文件
        * 在传统的软件开发中，UI是个很麻烦的问题
        * 但CSS的出现解决了这一问题
            * 以至于有不少非web平台（如qt）也开始支持css的一部分子集了
            * 微信小程序 wxml wcss js
            * FireFox 的 chrome （自身UI）
    * 更易用
        * 比传统软件中的UI开发方式更易用
        * 比在html标签里使用属性直接给标签增加样式更易用
        * 可以方便的给**一组标签**使用样式
            * p,h1,h2 {color: red;font-size: 25px;}
        * 也可以方便的给任意标签增加和删减样式
    * 一个样式表可以用于多个页面
        * 因为复用，于是减少了文件体积
    * 层叠，继承
        * 样式可以覆盖
        * 样式有优先级
        * 样式还可以继承
            * 什么叫继承？
    * 为未来着想
        * 这句是在CSS权威指南书写的时候说的
            * 当时w3c已经意识到给标签加上一些样式的属性不是一件好事，不利于表达语义（因为html更多的是结构和语义），所以开始慢慢的在标准中不推荐直接给标签写样式属性
                * <p><font color="" face>lasdkjf</font></p>
            * 意味着未来，直接给标签写样式会和不到更多的浏览器支持
    * css zen garden



* CSS初探
    * 想要让所有段落的文字显示成红色，并且字号为24px
      ```html
      <!--  -->
      <style>
      /*selector 选择器*/
      /*rule block 规则块*/
      /*rule*/
      /*prop-name*/
      /* prop-value */
          p {
            color: red;
            font-size: 25px;
            //px是一个长度单位，后面会解释
            font-weight: bold;
          }
      </style>
      <h1>Does it work?</h1>
      <p>The quick brown fox jumps over the lazy dog.</p>
      <p>The quick brown fox jumps over the lazy dog.</p>
      <p>The quick brown fox jumps over the lazy dog.</p>
      <p>The quick brown fox jumps over the lazy dog.</p>
      <p>The quick brown fox jumps over the lazy dog.</p>
      <div>it works!</div>
      ```

* 元素（即html标签）的层级关系
    * 嵌套/层叠/树形/递归/自相似/分形结构
        - 子元素 child
        - 父元素 parent
        - 兄弟 siblings
        - 后代 descendants
        - 祖先 ancestor
    * 替换元素与非替换元素  replaced element non-replaced element
        * <p>你在哪</p>，h123445,div,span,a,i,strong,em
        * select input textarea
        * <img src="a.jpg" />
        * <video src="a.mp4">
            <source />
          </video>
        * <audio src="a.mp3">
            wliejfoiwjef
        </audio>
        * <iframe src="http://www.mi.com/" frameborder="0"></iframe>
        * <input type="checkbox" name="" id="" />
        * <input type="radio" name="" id="" />
        * 替换元素 replaced elements
            * 替换元素是没有后代元素/标签/结点的
            * 替换元素是指其内容被其它不在文档里的内容替换了的元素，如：
                * img
                * radio
                * checkbox
                * input
                * iframe
                * canvas
                * object
                * video
                * audio
        * 非替换元素 non-replaced elements
            * 其它大部分元素都是非替换元素
            * 其内容直接出现在其标记中
    * 元素的显示角色 display role (不是html5里role/aria-*属性)
        * 布局上下文 布局模型 布局方式
        * 块级元素
            * 块级元素会占满父元素的宽度，不会让其它元素在它的旁边
                * p，h1-6，div, nav, header,footer,main,aside,section,article等默认都是块级元素
                * 所以`the <p>quick brown fox</p> jumps over the lazy dog.`会呈现为3行
            * 替换元素可以为块级，但一般不是这样
            * display属性可以改变元素的显示角色
                * inline
                * block
        * 行内/内联/行间 inline element
            * 即在一行文字内产生的元素框
                - 典型的比如a，em，strong,i,b,u,span标签都是行内元素
                - 它们不会在其前后产生换行于是也就不会打断所在行的文字
            * 在以前某些版本的html中，默认情况下内联元素是不能做为默认情况下块级元素的祖先元素的
                * <a href="">
                    <div></div>
                  </a>
                - 但在css中，并没有这个限制
                - 况且css可以改变元素的显示方式
                - 另外 ，在html5中元素并不只区分为块级与内联，而是分为如下几个大类
                    + flow
                    + pharsing
                    + transparent
                    + meta content
                    + section
                    + heading content
                    + embed
                    + intereactive
                    + https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories

    * 如何让css在html上起作用
        * style标签
            - `<style>p {color:red;}</style>`
        * link标签
            - `<link rel="stylesheet" href="print.css" media="print">`
            * media 属性，显示介质
            * media query
                * all
                * aural 听觉的
                * handheld 手持设备
                * print 打印设备
                    * 典型场景：打印时在链接的后面写上地址
                * projectioin 投影设备
                * screen
                * tty
                    * 字符显示设备/终端
                * tv
                * 可用逗号分隔这些属性值：
                    * media=“screen,tv”
        * 内联样式
            - `<div style="color:red;font-size:45px;"></div>`
        * DOM
            - `el.style.color = 'red'`


    * @import指令
        * 必须出现在文件头/顶部
        * 否则的话会被忽略
        * @import "../aa.css";
            - 在css里用的时候路径是相对于**这句代码所在的css文件**
        * style标签里也可以用import
            - 但需要注意import的路径问题，是相对于当前html文件的
            - 一般来说一个文件内出现了相对路径，都是相对于这个文件所在的文件夹的
        * @import语句会形成一个树状依赖
        * 并不常用
            * 因为会导致串行下载，串行下载太慢
    * css文件的注释
        * `/*  */`
        * css虽然只支持这一种注释风格，但是利用css的解析规则，我们可以有很多方式注释它
            - 如果这一行解析不成功，浏览器会直接忽略它
            - 所以以任意破坏这一行的内容开头就可以了
                + `//color:red;`
                + `xxcolors: red;`
    * 内联样式
        * style="//xcolor:red;xtext-indent: 2em;"
        * 内联样式也可以用上面提到的注释
            - 但因为没有换行，所以是不能使用//这种注释的
            - 不过可以通过改变一下属性名以达到注释的目的
            - 不过还是不推荐这种做法
            - 因为这样写的话相当于css有语法错误




* 选择器
    * 基本规则
        * selector ｛
            声明/属性:


            值;
            color: red;
            font-size: 24px;
            margin: red;
        ｝声明块
        * selector {
            prop:value;
            prop1:value1;}
        * 对应书本图片：p24页
    * 声明与关键词
        * 声明中的属性必须是css所支持的属性，否则将会被浏览器忽略
        ```css
            div {
                center: yes;
                color: red;
                colour: red;
                font-size: 28px;
                font-size: red;
                font-is-large: true;
            }
        ```
        * 声明的值也必须是**对应属性所支持的**，否则整条声明同样是无效的
        * color: 100;
        * DevTools 中可以看到以下提示
            * unknown property
            * invalid value
    * 想要把同一组属性应用于多种元素
    * 选择器分组
        * p,div,h1 { color: red; font-size: 20px; border: 5px solid; }
        * * {color: red;}
        * 通配选择符*
        * image/*
    * 规则分组
        * 一个选择器里可以写多条规则
        * 一条规则以一个分号结束，否则不生效
        * p30页例子
        * 最后一条规则可以不写分号，但最好还是写上
    * 标签/元素选择器 element selector
        - `element {rules}`
        - div {}  p {} span {}  abc {}
        - * {color: red;}
        - <div></div>
        - <abc></abc>
    * 类选择器与id选择器
        - <div class="foo error def ghi"></div>
        - <p class="foo error "></p>
        * 类选择器
            * div.foo
            * .foo
            * .foo.error.ghi
            * .foo
            * *::selection
            * *:target
            * 简写为   .classname
            * 复合 类选择器
                * p.class1.class2
                    * <p class="class1 class2 lsdkfj lksdfj"></p>
                * p.a.a {color: red;}
                * p.a {color: blue;}
                * ie7之前不支持这种
                    * 只会有最后一个类生效
                        * p.a.b 相当于 p.b ; p35页
        * id选择器
            -   <p id="thep"> </p>
            * #thep {color: red;}
            * #th#ep
            * [id="th ep"]
            * 不存在复合id选择器。。。因为一个元素只能有一个id
            * 而且id选择器是不按空格分隔的
            * p.a.b.c#foo
            * #thevalueofid {a:b;}
            * p,P {color:red;}
            * span {color:yellow}
        * 用id还是用class选择器
            * id是一次性的，只出现一次
            * class是多处可用，可以复用的
            * 另外id选择器是不支持空格分隔的id列表的，不像class，p36页
            * id选择器优先级更高
            * 大小写敏感的，.p,.P是不一样的。但有些老浏览器不敏感
            * #p,#P
            * .error {color:red;}
    * 属性选择器
        * 7种属性选择器
        * 存在某属性
            * [attr] {}
        * 存在多个属性，chaining
            * p[attr1][attr2]
            * [attr1][attr2]
        * 属性名与值同时匹配
            * p[attr="abc"]
            * p[class="abc def"] vs p.abc 不一样 p41页
            * .class2 .class2 {
            * }
        * 空格分隔的属性值列表
            * [attr~="abc"]
            * .abc == [class~="abc"]
            * 这个有什么作用呢？它可以用在任何属性上面而不是只在class属性上面
        * 属性值不区分大小写
            - <a href=".PDF"></a>
            * [attr~="abc" i], case insenstive
            * .a.b {}
            * [class~="a"][class~="b"] {
            }
        * 值以指定内容开头
            * [attr^="abc"] caret
            * 应用：为所有email链接加上特定的样式
            * a[href^="mailto:"]
            * a[href^="tel:"]
            * a[href$=".doc"i]
        * 值以指定内容结束
            * [attr$='abc']
            * 应用：为所有不同类型的下载链接加上不同的样式，如pdf文件加上其对应的图标
        * 值的任何位置包含指定内容
            * [href*='.google.'] {color: red;}
            * <a href="http://www.baidu.com/l.google.akdf/adsfal"></a>
            * 应用：选择某个域名的链接；不过强度不够，因为无法保证链接的其它部分不出现host中的内容。
        * 属性值前缀选择器
            * [lang|='zh']
            * 选择attr值 为abc 或者 以“abc-”开头 的元素
            * [lang|="zh"]
            * 应用：选择语言：<html lang="en"><html lang="en-US">
            * p43页
    * 选择器的作业
        * 给定一个文档，用不同的选择器实现不同的位置的文字样子不一样。。。
    * 选择 类名 以 bs- 开头的元素。
        *
    * 文档结构
        * 祖先元素 ancestor
        * 后代元素 descendant
        * 单层前后元素
            * 父元素 parent
            * 子元素 child
        * html元素是所有其它元素的祖先元素，所以也称为根元素 root element

    * 选择器与文档结构的对应
        * 后代选择器
            * p .foo  a  #top.foo.bar[class] img
            ```html
            <span></span>
            <p>
                <span></span>
                <span>
                    <span></span>
                    <span class="foo bar">
                        <a href=""></a>
                        <a href=""></a>
                        <a href=""></a>
                    </span>
                    <span>
                        <a href=""></a>
                        <a href=""></a>
                        <a href=""></a>
                    </span>
                </span>
                <span></span>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
            </p>
            <div>
                <p>
                </p>
            </div>
            ```
            * h1 em p#id.a.b[ATTR/attr="AbCd" i] span {}
            * td.main a:link
            * ul ol ul em {color: grey;}
            * ul em {color: grey;}
            <ul>
                <li><em></em></li>
                <li>
                    <ol>
                        <li>
                            <ul>
                                <li><em></em></li>
                            </ul>
                        </li>
                    </ol>
                </li>
            </ul>
        * 子元素选择器
            * div > h1 做为div的子元素的h1标签
                *
                ```html
                <div>
                    <h1>
                        <strong title="hello">adsfadsf</strong>
                    </h1>
                </div>
                ```
            * div > h1 > strong[title]
        * 邻接选择器
            * h1 + p.foo    h1后面的一个p标签
                ```html
                <p class="foo"></p>
                <h1></h1>
                <span></span>
                <p class="foo"></p>
                <p class="foo"></p>
                ```
            * h1 ~ p.foo
            * h1 + .class#id[attr][attr=2][attr$=3] + p
            * <h1></h1>  sdfadsf   <p></p>
            * 只能向后选，不能向前选
            * [a] ~ p ~ p
              <h1 a></h1>
              <h1></h1>
              <h1></h1>
              <h1></h1>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
        * 组合多种选择器
            * p#foo .bar[attr=val]  a b c d
            *
            * [attr]p {

            }
            * p:hover {}
            * div ul.b > li ~ li
                ```html
                <div class="a">
                    <ul class="b">
                        <li class="a b c">1</li>
                        <li class="b">2</li>
                        <li class="c">3</li>
                    </ul>
                </div>
                <style>
                :first-child {

                }
                </style>
                ```
        * .a .b .c {}
        * .a.b.c {color: green;}
        * p,#b,.c {color: red;}
        * <p id=b class=c></p>



        * 伪类选择器
            * p51页
            * pseudo class
                * 链接伪类
                    * :link 未被访问过的有href属性的a标签
                    * :visited 访问过的链接
                    * 老前端，贺老live面试你了
                    * 坑：泄漏隐私的漏洞，所以不能用任何方法得到一个链接的颜色
                    * 同时也不能设置visited伪类的大部分属性
                * 动态伪类，交互伪类
                    * a:hover
                        - 子元素被hover的时候父元素也被hover了
                    * a:focus 光标在input元素里，有tabindex属性的元素点击一下以后
                    * a:active
                * 链接的伪类书写顺序
                    * link-visited-hover-active
                    * LV HA
                    * p54页
                * 位置伪类
                    * p
                    * :first-child 匹配做为第一个子结点的元素
                    * :last-child 匹配某元素的最后一个子元素
                    * :nth-child(1)
                    * :nth-last-child(1)
                    * :nth-child(3n+1)
                    * :nth-child(3n+2)
                    * :nth-child(3n+3)
                    * :nth-child(-2n+8)
                    * :nth-child(n-9)
                    * odd/even
                    * 注意：
                        * p:first-child 选择的不是p的第一个子结点，而是做为第一个子结点的p元素
                        * p :first-child
                * 选择器取反
                    * :not(:not([value])) {}
                    * :not(p.a#b) {}
            * pseudo element
                * :first-letter
                * :first-line
                    * 只能用在块级（block）元素上面，p59
                * ::before
                * ::after
                * 以后讲，第12章
                *
                * :root  :root   选择文档的根元素。   3:empty  p:empty 选择没有子元素的每个 <p> 元素（包括文本节点及空格）。
                    3 :target 选择的是一个【id为url中#后面的内容(hash)】的元素
                    #news:target    选择当前活动的 #news 元素。
                    3:enabled    input:enabled   选择每个启用的 <input> 元素。 3:disabled   input:disabled  选择每个禁用的 <input> 元素  3:checked    input:checked
                        input:valid/invalid
                        input:required/optional
                 选择每个被选中的 <input> 元素。    3:not(selector)  :not(p) 选择非 <p> 元素的每个元素。    3::selection
            * css selector reference



    * 选择器的优先级
        * 优先级的定义，四个数
            * 0,3,3,10
            * (0，4，4，29)
            * (0, 6, 100000, 0)
            * 四位的无穷进制数
            * p63页
        * id选择器    #foo #bar #baz {}
            * 0，1，0，0
        * 类选择器，属性选择器，伪类选择器
            * 0，0，1，0
        * 元素选择器（标签选择器），伪元素选择器
            *
            * 0，0，0，1
        * 连接符如 > + ~ 等不参与优先级的计算
            * 于是 p a 与 p > a 的优先级是一样的
        * 通配符 *   * * {}
            * 0，0，0，0
            * 所以以下选择器的优先级是一样的
                * div p      div的所有后代的p元素
                * div * p      div的孙子及其后代的p元素
        * 连接符 combinators，无优先级
        * 内联样式/行内样式/行间样式/inline style
            * 1，0，0，0
            * <p style="color: green;">
        * ！important
            * p {color: red !important;}
            * 有与important冲突的属性，important都会占上风
        * 继承
            * 没有优先级，比【*】的有限级还要小
            * p69页
        * 层叠样式
            * 最终用户important样式
            * 网站作者important样式 authored style
            * 网站作者作者普通样式
            * 最终用户普通样式 Custom.css
            * 默认样式，浏览器内置样式，User Agent Style
            * 优先级一样的话，按出现的顺序排列，后出现的优先级更高
                * 所以是 link visited focus hover active
                * :link:hover /0 0 2 0/
                * 不过在这几个伪类上分别写完全不同的属性时，顺序就不重要了
                * 重要的是写相同的属性，这时就要考虑优先级的问题了
                * LV HA  VL HA 没有太大区别，因为很明显，V和L不会同时匹配
            * 不来自CSS的样式
                * 如font标签 <font size color face></font>
                    * 可以想象它的优先级为0000并且出现在作者样式的开头
                    * 会被作者样式和读者样式覆盖，但不会被默认样式覆盖
                    * p75页
                * <font color="red">aa</font>
                * <style>* {color: green;}</style>



* 值与单位
    * 数字
        - line-height: 2;   /* 200% */
        - animation-iteration-count: 2;
        - zoom: 2.5;
        - column-count: 2;
    * 百分比
        - width/height: 60%;
        - top/left/right/bottom: 50%;
        - line-height: 150%;
        - vertical-align: 40%;
        - color: rgb(40%, 50%, 70%)
    * 百分比与纯数字不可互换
    * 颜色(R G B)
        * color: red;
        * red/blue/green/tan/brown/teal/grey/maroon/silver/yellow/aqua/lime/
        * lightgreen/lightpink/lightblue/darkblue
            * 事实上大部分时候都用不到这些颜色，写demo的时候可以用来炫技
        * hex color
        * #HHHHHH #(0-255)(0-255)(0-255) -> 16700000
        * hexa #ff00ff80
        * #abc -> #aabbcc
        * #abcd - #aabbccdd
        * #456 -> #445566
        * #XYZ -> #XXYYZZ
        * #XYZA -> #XXYYZZAA
        * rgb(r,g,b) sin(3.14) log(2,32) = 5
        * rgb(0-255, 10, 0-255)
        * rgb(r%,g%,0-100%)
        * rgba(r,g,b,0 -> 1)
        * 色彩空间
        * CMYK(Cany Manganta Yellow blacK)
        * 色域
        * hsl（色相，饱和度，明度）
        * hsla（色相，饱和度，明度，0-1）
        * hexa rgba
        * web safe 颜色，216种
        - 是在早期大家的电脑都只支持256种颜色时，选出的大部分浏览器与操作系统都支持的216种颜色
            * 6的3次方，即r，g，b分别有6阶可选
        - https://websafecolors.info/learn
        - gif 图片也只有 256
        * p83
    * 长度
        * 绝对长度单位
            * in(ch) 英寸
            * cm 厘米 centimeters
            * mm 毫米 millimeters
            * -moz-mm
            * pt point 72分之一inch
            * pc pica 6分之一inch
            * 存在的问题
                * 大部分时候不准，取绝于你的分辨率以及系统设置
                    - 于是用的也很少
                * 但在打印的时候可以比较准
            * Surface Studio
        * 相对长度单位
            * px，CSS像素
                * 很多人以为这是个绝对长度单位，其实并不是。但在设计中，大多数时候被认为是绝对长度（p89页）
                * 指定图片的大小一般肯定是用这个，要不然图片会被变形拉伸，因为图片的尺寸大多数时候是以px来丈量的
                * 另一个坑，在ie7之前的浏览器，放大时以px指定的文字不会放大，不过已经不在考虑范围了
            * em
                * 【当前元素】font-size的大小
                  ```css
                  <div>
                    <p></p>
                  </div>
                  div>div>div>div>div

                  .foo {
                      font-size: 30px;
                  }
                  div {
                    font-size: 2em;
                    width: 10em;
                  }
                  p {
                    width: 10em;//300px
                    font-size: 1.5em; //30px
                  }
                  ```
            * rem
                - root element's em
                - 灵活的布局
                - html 元素（根元素）的字号
                - html {font-size: 2em;}
                - p {width: 20rem;       }
            * ex
                * x字符的高度
                * 几乎没啥用处
                * jx
                * 有些浏览器会把它计算成 0.5em
            * ch，0字符的宽度
                * l w
            * vw/vh
                - viewport width
                - 1vw 视口宽度的100之一
                - viewport height
                - 1vh 视口高度的100之一
                * 包含滚动条
            * vmax/vmin
                - vmax = max(vw, vh)视口宽或者高较大的那一个的100之一
                - vmin = min(vw, vh)视口宽或者高较小的那一个的100之一
            * width: calc(2 * 30em - 40%)
            * line-height: calc(2 * 3)
            * 1km - 10mm
    * 角度
        - degree 角度 45deg 90deg
        sin(pi/4)
        - radian 弧度：0.14rad = 180deg     90deg => pi/2
        - turn -》   1turn = 360deg = 6.28rad
        * 30deg
        * transform: rotate(20deg);
    * 时间
        * 1s
        * 1.2s
        * 0.2s
        * .2s
        * .3s
        * 1ms
        * 1s = 1000ms
    * hz
        * 5hz
    * URL
        * background-image: url(a.png);
        * url(path)
        * url(protocol://server/pathname)
        * url("protocol://server/pathname")
        * url(/../../abc.jpg)
        * 相对路径相对于【这句代码】所在的文件所在的文件夹
        * 相对路径，绝对路径等，一个话题
    * css关键字
        * width: 300px;
        * display: none block inline inline-block table table-cell ;
        * background-color: currentColor;
        * font-size: inherit;
        * border-style: solid/dotted/dashed/ridge;
        * none，注意跟0不一样
        * inherit
        * 如果一个属性接受关键字，这些关键字则专门指定为该属性的关键字
        * 如果两个属性接受同一个关键字，这两个关键字的行为很多时候是不一样的
            * 比如说，normal，在给letter-spacing与font-style时意义完全不同
    * 字符串
        * content: 'ffoo\6211oo';
    * 取属性的值
        * content: attr(href);
        * transform: rotate(30deg) skew(50deg) matrix(1,2,3,4,5,6);





    - Helvetica
    * 《字体故事》 多看 68






* 字体
    * 字体族
        * serif 衬线字体
        * sans-serif 非衬线字体
            * 什么是衬线？
        * monospace 字体，等宽字体
    * 使用通用字体族
        * body {font-family: sans-serif;}
        * 以上代码中，浏览器将自动选择一款没有衬线的字体
    * 使用指定的字体
        * h1 {
        font-family: "MicroSoft YaHei";
        }
            * 如果用户的电脑上安装了这款字体，那么该页面上的h1将会用这个字体
            * The quick brown fox jumps over the lazy dog.
            * 全字母句
        * 但是，有时候用户的浏览器并不一定安装了这个字体
            * 这时可以指定退化（fallback）方案
        * h1 {font-family: "Helvetica", "微软雅黑", sans-serif;}
        * 一般来说，最好提供一个字体族名称做为最后的退化方案
        * <p> 一般，function </p>
    * 字体名称里面有特殊字符时
        * 使用引号（quotation marks）引起来
            * 单双均可，只要配对就好
                * 但注意在html标签的style标签里面的时候要跟外层的引号匹配，还是配对问题
        * 如果不加的话，浏览器会忽略那个字体声明
            * p {font-family: "Microsoft YaHei", "lksdjf, i*7#" , serif;}
            * 上面这条规则相当于p {font-family: "Microsoft YaHei", serif;}
            * 书上是这么说，但是我试了Chrome会忽略整条规则
        * 另外，通用字体族必须不能加引号，它们算是关键字而不是字体值（字符串）
            * 加了引号就成指定的字体名称而不是字体族了
        + font-family: linux, mac, windows, serif;
        * font-family: 'microsoft yahei';
    * 字重
        * font-weight
            * normal
            * bold
            * bolder  <h1> bar <span>foo</span></h1>
            * lighter
            * 100 - 900
            * inherit
        * 一般来说，一些字体都会预定义一些不同字重的字体
            * 如
                font-family: 'Zurich';
                font-weight: bold;
                * Zurich Extra Black
                * Zurich Black
                * Zurich Bold
                * Zurich
                * Zurich Light
                * 例：苹方字体全套
            * 于是可以这么用
                * p {font-family: 'Zurich Black'}
                * div {font-family: 'Zurich Light'}
                * strong {font-family: 'Zurich Bold'}
            * 但
                1. 上面的写法很繁琐
                2. 很多字体**不一定**预定义了这么多种不同的内置字重，或者用户不一定安装了所有这些字体
                    * 这意味着可能会使用退化字体
                3. 很多可能就只有一种
                    * 这种情况下浏览器可能会实时计算出比如粗体的样子
            * 怎么办呢？
                * 只指定主字体，然后指定font-weight，由浏览器来选择具体字重的字体文件，或者计算出来
            * Bolder
                * 让字体变的更粗
            * Lighter
                * 让字体变的更细
    * 字号 font-size，
        * （所谓的）绝对大小关键字
            * xx-small
            * x-small
            * small
            * font-size: medium;
            * large
            * x-large
            * xx-large
        * 根据规范，一个绝对大小与相邻的绝对大小的缩放因子是1.5以及0.66
            * 比如如果medium是10px
            * 那large就是15px
            * small就是6.66px
            * 但
                * 不同浏览器设置的缩放因子可能并不一样
                    * 而且，这个值是开发者没办法更改的
                * medium的大小也是不确定的
                * 所以这几个关键字基本上没什么用武之地
        * 百分比单位
            - 相对于父元素的大小，也即继承过来的值
            - 跟em的效果几乎是一样的
                + 120%跟1.2em几乎一样
            - 使用这种单位可能会产生意想不到的效果
              ```html
              <style>
                  span {
                    font-size: 150%;
                  }
                  em {
                    font-size: 1.5em;
                  }
              </style>
              <span>
              a(24) <em>abc(19.2)</em>
                <span>b(36)
                    <span>c(54)
                        <span>d()
                            <span>a span</span>
                        </span>
                    </span>
                </span>
              </span>
              ```
            - 字会越来越小。。。
        * font-size的继承
            - 总是继承的是**计算后**的值，而不是**书写时**的值
            * div>p>span
            * div {font-size: 10px;}
            * p {font-size: 120%;}
            * span {font-size: 120%;} -> 14.4px
        * 长度单位
            - 绝对单位如cm，pt等可能不是你想要的
                + 不同的系统可能显示效果不一致
            - 所以大多数页面中选择px等单位
                + 能够“最大程度的”保证设计的高度还原
                + 但存在的一些问题是，老版本的浏览器在放大页面或字体的时候，无法放大以px指定大小的字体
                + 现代浏览器无此问题
    + font-style与font-variants
        * font-family: "Consolas";
        * font-style
            - normal
                + 文字**是正*的，即垂直的
            - italic
            - oblique
            - 上面两个都是斜体，但是有啥区别呢？
                + italic是另一个专门设计好的斜体字体
                    * 比如正常字体是 Roboto
                    * 则italic字体可能会是 Roboto Italic，Roboto Cursive
                + 而oblique则是在正体的文字基础上变幻出来的一个斜体字
                    * 而oblique则一般会map到Roboto Slanted，Roboto Incline， Roboto Oblique
            * 此处细节较多，建议看书本p115页
        * font-variant
            - normal，默认
            - small-caps
                + 把小写字母显示成小号的大写字母
                + 有些字体专门为小写字母设计了这种样式，而不是单纯的把大写字母显示的小一点。
                    * 当字体没有提供这种样式的时候，浏览器当然就是把大写字母缩小了
            - 与 text-transform：uppercase
                + 这个规则是把所有的文字显示成大写
                * the quick-brown fox
                * captialize -> The Quick-Brown Fox
                子属性



        - font-size/family/style/weight/variant
        - font: ;
        - font-style:;
        - font-weight:;
        - border SHORT HAND
        - border-style/width/color;
        - border-left/right/top/botoom
        - border-left/right/top/bottom-style/widht/color;
        - margin   margin-left/right/top/bottom;
        - transition transition-duration/timing-funciton/property....
        - border-radius
        * font 属性 short hand
            - font:
            [font-style || font-variant || font-weight] font-size[ / line-height] font-family
            - font: small-caps bold 20px / 1.2em 宋体, serif;
            - 前三个的顺序不重要
                + border:red  solid 1px;
            - 如果前三个的随便哪一个值为normal，则可以省略
            - line-height可以省略，但如果出现，必须加/并且出现在fz的后面
            - fz跟ff必须出现，而且顺序也是这个顺序，不能乱
            - font: 25px/1.2 "宋体" ;
            - font: 25px "宋体";
            - font: 120%/1.2 "宋体";
            - font: small-caps 120% / 1.2 "宋体";
            - p121页


* 文字相关的属性
    - 文字缩进 text-indent
        + 以前是怎么做的呢，放张白色的图片在段落前面。。。
            * 也有说有一个非标准的spacer标签，p128页
        + text-indent: 2em
        + text-indent: 5%；百分比相对于父元素宽度
            * 一般很少用百分比
        + 应用
            * 用text-indent: -99999px来把标签里的文字隐藏，然后用背景图片“替换”标签内容
            * -2em这种可以实现首行悬挂
            * 2em则可以实现首行缩进
        + 本属性只适用于块级元素，不适用于内联元素
    - 文字水平对齐 text-align
        + left
        + right
        + center
        + justify
            * 两端对齐
            * 不同行文字之间的空白可能就不一样了
            * 在有长单词的行中显得比较明显
                - css 并不支持在打断长单词时自动加上连字符-
                    + 据说原因是因为不同的语言的连字符不一样
                        * p133页
            * 脑洞：单行文字两端对齐
        + 与center元素作用不一样，center会把整个元素都居中，而text-align只居中文字
            * http://jsbin.com/senefeg/1/edit?html,css,output
    - 文字在垂直方向的对齐 vertical-align
        + line-height
            * content-area
            * inline-box
            * p135页，图
            * 取值
                - 长度
                - 百分比
                - 以及inherit
                    + 取非纯数值时，继承的是计算结果
                        * 即取inherit时，也是得到的计算后的结果
                - 纯数值
                    + 取纯数值时，继承的是书写数值
                    + p137页
            * 应用：单行文字垂直居中
                - 坑点，无法让lh总是等于元素的高度
                - 其它
                    + 多行文字垂直居中
                        * http://www.zhangxinxu.com/wordpress/2009/08/%E5%A4%A7%E5%B0%8F%E4%B8%8D%E5%9B%BA%E5%AE%9A%E7%9A%84%E5%9B%BE%E7%89%87%E3%80%81%E5%A4%9A%E8%A1%8C%E6%96%87%E5%AD%97%E7%9A%84%E6%B0%B4%E5%B9%B3%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD/
                    + flex等实现方式
        + vertical-align
            * 这个属性适用于【内联元素】
                - img
                - input
                - 替换元素等
                - 而不是给块级元素用的
            * 取值
                - 关键字
                    + baseline
                        * 默认值
                        * 让元素的基线与其父元素行框的基线对齐
                        * 如果一个元素没有基线，如img，input，则让其底部与外面的文字对齐。即使行框没有文字也是一样。是p138-139页
                            - 应用：图片跟文字底部对不齐
                    + sub
                        * 元素的baseline（或底部）会比父该行文字的basline低
                        * 但低多少，标准并没有说。。。
                    + super
                        * 同上，元素的baseline比该行内容的baseline要高
                        * 标准同样没有规定高多少。。
                    + bottom
                        * 目标元素的底部跟这一行的底部对齐
                    + top
                        * 目标元素的顶部跟这一行的顶部对齐
                    + text-top
                    + text-bottom
                        * 元素的顶/底部与文字的顶/底部对齐
                    + middle
                        * 并不是垂直居中
                        * 而是把【元素的中间】与baseline上面0.5ex（即四分之一em）对齐。。。
                    + 百分比
                        * 相对于自己的 line-height
                        * 把其 baseline 向上或向下移动计算出来的值
                    + 固定长度值
                        * 按指定的数值上移或下移元素
                        * 上下移动元素并不会让其与其它行的内容重叠，而是会增加行框的高度
                - 在作用于表格元素时
                    + 只有 baseline，top，middle，bottom 有效，其它无效
                        * 将在表格布局一章说到
        + word-spacing
            * 控制单词间的间隔
                - 注意中文文字之间不是word space，而是letter space
                    + p144页
            * 其值是添加到本身空格间的值，而不是设置了多少，单词间就间隔多少
            * 取值
                - normal
                    + 相当于写成0
                - 长度单位
                    + 写成多少，单词间的间隔就是空格的宽度加这个值
                    + 可以为负值
        + letter-spacing
            * 改变字母间的间隔
                - 对于汉语，则是改变文字之间的间隔
            * 取值
                - normal
                    + 相当于设置为0
                - 长度值
                    + 增加或减少字母间的距离
        + word-spacing，letter-spacing 与 text-align：justify
            * letter-spacing:normal与text-align:justify一起用时，字母间的距离可能会被改变
            * 但如果给了letter-spacing一个指定的值的话，则justify就不会影响它了
            * http://jsbin.com/pasekej/1/edit?html,css,output
        + text-transform
            * uppercase
                - 所有字母变成大写
            * lowercase
                - 所有字母变成小写
            * capitalize
                - 每个单词的首字母大写
                    + 值得注意的是
                    + heading-one可能被转换成下面两种
                        * Heading-One
                        * Heading-one
            * 本属性的效果先于font-variant执行
            * none
                - 默认，as authored
            * inherit
            * 应用
                * 有些网站的优惠券是全大写的，或者Windows的激活码什么的
                * 输入的时候有些用户可能会觉得是要输入大写还是小写
                * 这时就可以使用text-transform来实现不按shift就输入大写
                * 来源：在本来生活网上买东西时用优惠券时想到的

        * div#foo{
            font-size: 40px;
            font: 24px/1.2 sanif;
        }
        + text-decoration:  overline underline;
            * underline
                - 下划线
            * overline
                - 上划线
            * line-through
                - 删除线
            * blink
                - 不支持了
            * 值得注意的是子元素没有办法去掉由父元素留下的各种线
            * 另外线的位置，粗细，样式都不能指定
                - 有其它解决方案，用背景图片
                - http://jsbin.com/yacobev/1/edit?html,css,output
        + text-shadow
            * 文字阴影
            * 取值：
                *   水平偏移 垂直偏移 模糊半径 颜色, 下一组;
                * 颜色可以出现在最前或者最后，也可以省略，默认为黑
                * 模糊半径可以不写，则为0
                * 可以用逗号写多组阴影
                https://flow.org
        + box-shadow
            * 与上类似
            * 取值
                - 水平偏移 垂直偏移 模糊半径 扩散半径 颜色,下一组;
                - 两个半径都可以不写，默认都为0
                - 颜色同上



        + white-space
            * 指定如何处理空格与换行，以及自动换行
            * p155表格
            * https://developer.mozilla.org/zh-CN/docs/Web/CSS/white-space
        + word-break
            * 指定单词如何折行
            * https://developer.mozilla.org/zh-CN/docs/Web/CSS/word-break
        + overflow-wrap
            * 以前叫 word-wrap，是早期ie浏览器引入的一个属性
                - 题外话：ie在文字排印方面的css支持很好，可惜很多浏览器一直不跟进
            * https://developer.mozilla.org/zh-CN/docs/Web/CSS/word-wrap
            * http://www.cnblogs.com/2050/archive/2012/08/10/2632256.html
        + direction
            * ltr
                - left to right
            * rtl
                - right to left
        + unicode-bidi: bidirectional;
            * ZWJ Zero Width Joiner
            * 感叹号X喵唔~:xxxx
            * username撤回了消息
            * username = 并亲了你一口?xx
            * xx撤回了消息并亲了你一口
            * https://www.zhihu.com/question/43621727


* 盒模型，box model
    - 盒模型是什么
    - margin外边距
        + 可以为负值
        + 垂直margin会合并
        + 垂直margin在有些情况下会超出到父元素之外
        + 值的复制
            * margin: a; -> a a a a
            * margin: a b; -> a b a b
            * margin: a b c; -> a b c b
            * margin: a b c d; -> a b c d
            * padding同理
        + margin-left/right/top/bottom
    - border
        + border-width: 3px 5px 2px ;
            * 边框宽度
        + border-color: red green;
            * 默认为color的值
        + border-style: solid dotted dashed double;
            * solid
            * dotted
            * 其它
        + 所有边框可以写在一个属性里面
            * border: style color width;顺序任意
            * border: none
        + 也可以单独设置某一边的边框
            * border-left/top/bottom/right: style color width;
        + 甚至可以完全分开设置任意一边的任意一个属性
            * border-left-width/color/style
        + 画三角形
            * http://jsbin.com/nasolud/1/edit?css,output
    - padding
        + 内边距，不能为负值
        + 背景颜色会显示在padding上面
    - content
        + 内容区域
    - width
        + block类型的元素会占满父元素的水平内容区域
        + 更严格的说，是 margin-left,border-left-width,padding-left,width,padding-right,border-right-width,marign-right 加起来正好等于父元素内容水平宽度
            * http://jsbin.com/pakege/1/edit?html,css,output
    - box-sizing
        + 宽度的计算方式
            * border-box
            * content-box
            * 没有margin/padding-box
            * 但另一个属性支持这两个选项
        + doctype
            * 在ie低版本下，如果不声明doctype的话，默认为border-box模型
    - display
        + none
        + inline
        + block
        + inline-block
            * img
            * 从外面看是inline的，从里面看是block的
        + table类/list类
    - height
        + 非定位元素写百分比是无效的
            * 原因：它的高度会影响父元素，而父元素被它撑高后又会反过来影响它，逻辑上就不成立
        + 定位元素写百分比是相对于其定位祖先，而非直接父元素
            * 应用：做出类似选择父元素的功能
                - http://jsbin.com/rofugib/1/edit?html,css,output
    - 定位
        + position
            * static
                - 在哪就在哪，默认值
            * relative
                - 相对于自己本身的位置做偏移
            * absolute
                - 相对于离自己最近的一个定位了的（position属性不会static）祖先元素做定位
            * fixed
                - 相对于浏览器窗口进行定位
                - 应用：回到顶部
                - 应用：固定搜索栏
            * sticky
                - obslated
        + top，left，right，bottom
            * 定位了但是没指定这几个值的任意一个，元素会在原来的位置，与之后的内容重合
            * 定位原点是padding box
            * 比百分比时，以父元素宽度为基准值
        + 各种应用：
    - 案例：级联菜单
        + http://jsbin.com/hedozaq/1/edit?html,css,output
    - 案例：slider
        + http://jsbin.com/tijiqi/1/edit?html,css
        + http://jsbin.com/tijiqi/2/edit?html,css
        + http://jsbin.com/tijiqi/3/edit?html,css



* 杂项
    - before after 伪元素,注意跟伪类区分！:hover,:focus
        + 是两个元素
        + content指定的是这两个伪元素的内容，而不是替换之，所以content是在这两个元素的内部
        + attr()
        + 'string'
        + url()
        + counter()
        + counters()
        + 多值之间打空格，会被连起来
        + 回车，\A
            * 搜索 pseudo element insert new line charactor
        + 其它特性基本上与一般元素一样
        + 应用：
            * 自定义选项框
            * 自定义tooltip
                - http://jsbin.com/goligo/4/edit?html,css,output
                - http://jsbin.com/goligo/5/edit?html,css,output
    - float
        + 9条规则
        + 向右浮动时，顺序会反过来
    - clear
        + left,right,both
    - inline-block
    - z-index
        +
    - opacity透明度
        + 会让整个元素及内子元素都透明
    - transition渐变
        + transition-timing-function
            * linear
            * ease-in
            * ease-out
            * ease-in-out
            * ease
            * step-start
            * step-end
            * steps(10, start/end)
            * cubic-bezier(x1,y1,x2,y2)
            * 多个以逗号分隔
            * https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-timing-function
        + transition-property
            * 指定哪些属性渐变
            * 如果指定简写属性，其所有子属性都会渐变
            * 多个以逗号分隔
            * all表示所有属性
        + transition-delay
            * 渐变前等等多久
            * 应用
                - 延迟显示菜单项
                - 连接两个动画使其看起来没有间隙
                    + 例：碰撞效果
        + transition-duration
            * 渐变以多久的时间进行
            * 多个以逗号隔开
        + 合并写法：
            * transition：property duration timing-function delay [,下一组]*;
        + 渐变所有的属性
            * transition: all .2s;
            * transition: left .2s linear;
        + http://jsbin.com/goligo/3/edit?html,css,output
    - animatable property
        + 离散型
        + 连续型
        + https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties
    - transform变幻
        * scale XYZ
        * rotate XYZ
        * skew xyz
        * translate XYZ 3D()
            * 绝对居中
        * translate3D()
        + https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform
        + 取百分比时以自身尺寸为基准值
    - transform-origin
        + transform-orign: x-offset y-offset z-offset;
        + center top/bottom left/right
    - 3d，做梯形
    - 案例：bubble.css
        + 属性选择器
        + before after伪元素
        + 动画
        + 定位



* 第九章：颜色与背景
    - color
        + 颜色 前景色（与之对应的则是背景色）
            * 一般画图工具中都有类似对应的图标
        + 默认为黑色
        + 会被子元素继承
            * 所以设定一个元素的颜色，其子元素都将是这个颜色
                - 这是很明显的(#333)
        + 会做为border，text/box-shadow的默认值
            * text-shadow: 2px 3px 3px;
            * box-shadow: 5px 10px 5px ;
        + css3的currentColor
            * 用在其它属性上比如bgc上，或者linear-gradient等
    - background
        + background-color
            * 背景色
                - 默认值为transparent，即透明
            * 不继承
                - 否则会有奇怪的效果，比如如果设置了semi透明颜色，而且又继承的话。。
        + background-image
            * url()
            * 默认从padding box开始渲染（画）的
            * 背景图片无法从网页上直接复制
        + background-size
            * https://developer.mozilla.org/en-US/docs/Web/CSS/background-size#Browser_compatibility
            * cover 图片由无穷大缩小到正好覆盖元素
            * contain 图片由无穷小放大到正好被元素包围
            - object-fit
                + img
                + video等
            * 如果attachment 为fixed，背景区为浏览器可视区（即视口），不包括滚动条。不能为负值。
        + background-repeat
            * background-repeat
                - repeat
                - repeat-x/y
                - no-repeat
        + background-origin css3
            * content-box
            * padding-box
            * border-box
            * 与box-sizing的关键字是对应的
        + backgorund-attachment
            * scroll
            * local
            * fixed
                - 为此值时bg-size的百分比以浏览器窗口的大小来计算
                - 可以用来做视差滚动
                - http://www.mi.com/xiaoyi/?cfrom=list
        + background-position
            * background-position-x/y
            * 雪碧图，css sprite
            * 0 0
            * auto 200px
            * 100px
            * 0px 10px 相对于左上角
            * 50% 30% 相对于左上角
            * top left /// right bottom 让图片处于某个角落
            * top 20px right 50px   相对于右上角，往元素中心水平偏50px，垂直偏移20px
            * calc(100% - 50px) 从最右往多偏移50px
        + background-clip
            * xx-box
            * 平铺以后再裁剪
        + -webkit-background-clip
            * text
        + css3 多背景
            * 分开写，合并写
        + background: <bg-img> <bg-repeat> <bg-origin> <bg-clip>, <bg-img> <bg-repeat> <bg-origin> <bg-clip>,<bg-img> <bg-repeat> <bg-origin> <bg-clip> bg-color;
        + 应用
            * 伪元素里的图片，
            * css spirit
            * 动画，菜单，小米网首页logo动画
            * 视差滚动：小蚁摄像机页面效果，Nike活动页面效果
            * 多背景做花纹








* 第七章：基本视觉格式化
    - 基本框。盒模型
        + content box
            * 内容盒子
        + padding
            * 内边距，不能为负
        + border
            * 边框，不能为负
        + margin
            * 外边距，可以为负
                - 负margin的应用有很多
            * 外边距合并
                - https://www.sitepoint.com/web-foundations/collapsing-margins/
                -
    - 块级元素
    - 相关文章
        + https://www.sitepoint.com/web-foundations/collapsing-margins/
    - box-sizing
        + p162页
        + 无doctype的情况
    - 块级元素


* 第八章：padding margin border
* 第十章：浮动与定位
* 第十二章：列表与生成元素
* 第十一章：表格布局

* sublime
* css遗留问题
    - float vs absolute vs normal flow
    - img vs background-image
    - 交互动画的细节
        + 灵活运用transition-delay以及step-start/end等缓动函数
        + 灵活使用动画做出洗牌效果
        + 多步 动画
    - float布局问题
        + float的元素会尽量窄
        + 清除浮动与闭合浮动
    - 常见布局
        + 多栏布局
            * http://jsbin.com/comoze/1/edit?html,css,output
        + 多栏等高布局
            * http://jsbin.com/ticava/1/edit?css,output
        + 自适应布局
            * http://jsbin.com/yijerij/1/edit?html,css,output
                * 删除一栏，其它栏自动变宽
    - css hack
        + 书写顺序
    - conditional comment
    - reflow vs repaint
        + 回流 vs 重绘
        + :visited
        + http://stackoverflow.com/questions/2549296/whats-the-difference-between-reflow-and-repaint
    - all属性
        + #id {all: initial; transition: all 1s linear;}
    - 表单元素伪类
        + :disabled
        + :enabled
        + :checked
        + :valid
        + :invalid
    - viewport 与移动端布局
        + `<meta name="viewport" content="width=300">`
        + 屏幕宽度 = 视觉稿上的宽度
        + 100vw = x
        + 1 = 1rem
        + 100vw = x rem
        + 1 rem = 100vw / x; => html{font-size:calc(100vw / x)}
        +
    - bootstrap
* css3
* Media Query
    - link media="print,"
    - 响应式网站
* New Selectors
    - pseudo-class
* web font
    - iconfont
* flexbox布局
* 多列布局
* 渐变
    - 线性渐变
    - 扩散渐变
* 2d/3d 变幻
* 动画与渐变
*




* 通用多栏布局实现方案
* CSS3的内容
    - opacity
        + 会影响里面所有的内容
    * media query
    * transition
    * animation
    * gradient
    * flex
    * css hack
    * reflow
    * repaint
    * 开发工具的使用
    * multi-column
    * webfont
        * iconfont
        * 对比雪碧图与svg icon
    * 新增属性
        * border-radius
        * box-shadow
        * bg-size
        * bg-origin
        * ...
    * new pseudo class
        * ::selection
        * ::empty
        * ::target
        * ::scroll-bar
    * all属性：initial
* 其它相关应用
    * 字体图标
    * rem
    * 移动端布局方案
* 表单元素伪类
    - :valid
    - :invalid
    - :out-of-range
* css text-transform的应用
    * 有些网站的优惠券是全大写的，或者Windows的激活码什么的
    * 输入的时候有些用户可能会觉得是要输入大写还是小写
    * 这时就可以使用text-transform来实现不按shift就输入大写
    * 来源：在本来生活网上买东西时用优惠券时想到的
http://tympanus.net/Development/CreativeLinkEffects/#cl-effect-2




font属性会重置line-height
transform要注意它别把之前的给重置了
transition不要写在hover上面
    http://jsbin.com/migola/1/edit?html,css,output
    http://jsbin.com/migola/2/edit?html,css,output
line-height继承到了伪元素里面，导致样式变形
hover 这些伪元素时它们自己也会出现。事件穿透
    pointer-events
