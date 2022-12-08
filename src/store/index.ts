import { defineStore } from "pinia";

export const mainStore = defineStore("main", {
  state: () => {
    return {
      theme: "light",
      newlineType: "",
      topic: {
        title: "深入理解undefined和null的区别",
        time: "",
        user: "",
        category: "IT",
        tags: ["技术讨论", "javascript"],
        body: "<h1>背景</h1><ul><li>通过当前文章所在专栏的上一篇的文章学习我们可以知道 <code>undefined == null</code> 进行相等比较返回的结果是 <code>true</code>,但是具体是怎么样的,<code>ES5</code> 规范好像并没有明确的说明,这便引起了我的极度好奇,那么通过这篇这篇文章我们将揭开这个神秘的面纱。</li><li>如果你还不是很熟悉 <code>js</code> 的类型,你可以看本专栏的往期文章,关注此专栏我想你能找到你想要的内容。</li></ul><h1>什么是undefined</h1><ul><li>全局属性&nbsp;<code>undefined</code>&nbsp;表示原始值 <code>undefined</code>。它是一个 <code>JavaScript</code> 的原始数据类型。</li><li>一个没有被赋值的变量是 <code>undefined</code> 类型。</li><li>如果正在执行的变量没有分配值,则该 <code>方法</code> 或者 语句<code>返回</code>undefined`。请查看下图:</li></ul><p><img class='medium-zoom-image' src='https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bed62bdc73e74333ab9f94f6c3edd36d~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp' alt='image.png' loading='lazy'></p><ul><li>在上图中,声明变量返回的是 <code>undefined</code>,而 <code>typeof</code> 返回的是类型字符串。</li><li>如果一个函数没有返回值,那么该函数的返回结果是 <code>undefined</code>。</li><li>如果函数定义了有参数,但是没有函数调用参数,那么它也是 <code>undefined</code>。</li><li>为了证明以上的说法,请看下列代码:<pre class='language-javascript'><code>function foo(x, y) {  console.log(x); // 77  console.log(y); // undefined}const bar = foo(77);console.log(bar); // undefined</code></pre></li></ul><h1 data-id='heading-2'>什么是null</h1><ul><li>值 <code>null</code> 特指对象的值未设置,它是 <code>JavaScript</code> 基本类型之一,在布尔值运算中被人误是 <code>falsy</code>。</li><li>值 <code>null</code> 是一个字面量,不像 <code>undefined</code>,它不是全局对象的一个属性,指示变量未指向任何对象,把 <code>null</code> 作为尚未创建的对象也许更好理解。从逻辑上讲,<code>null</code> 表示一个空对象指针,这也是给 <code>typeof</code> 传一个 <code>null</code> 会返回 <code>'object'</code>的原因</li><li>在获取 <code>DOM</code> 元素时,如果没有获取到,返回的是 <code>null</code>,原型链的最顶端也是 <code>null</code>,请看代码:<pre class='language-javascript'><code>console.log(document.querySelector('moment')); // nullfunction foo() {}console.log(foo.__proto__.__proto__.__proto__); // nullconsole.log(Object.__proto__.__proto__.__proto__); // nul</code></pre></li></ul><h1>重头戏来了</h1><ul><li>在 <code>typeof</code> 中分别对 <code>undefined</code>和<code>null</code>进行类型检查,请看以下代码:<pre class='language-javascript'><code>console.log(typeof undefined); // undefinedconsole.log(typeof null); // object</code></pre></li></ul><ul><li><code>typeof undefined</code> 输出 <code>'undefined'</code>估计已经家喻户晓了吧,但是为什么 <code>typeof null</code> 输出的 <code>'object'</code>,通过查阅资料得知,这是一个历史遗留问题,曾经有有一个 <code>ECMAScript</code> 的修复提案,但被拒绝了,这个似乎无法修复,因为它会破坏现有代码(此项目依靠该bug运行...)。</li><li>在 <code>JavaScript</code> 的第一个版本中,值存储在32位的单元中(相当于一条机器码),它由一个小型类型标记(1-3位)和值的实际数据组成。类型标记存储在单元的低位,其中:</li></ul><ol><li>000: <code>对象</code>,数据是对象的引用;</li><li>1: <code>整型</code>,数据是31位带符号的整数;</li><li>010: <code>双精度</code>,数据是双精度浮点数的引用;</li><li>100:字符串,数据是字符串;</li><li>110: 布尔值,数据是布尔值;</li></ol><blockquote><p>在 V8 引擎中,会把 JavaScript 热点代码编译成机器码,它是电脑CPU直接读取运行的机器码，运行速度最快，但是非常晦涩难懂，同时也比较难编写；机器码就是计算机可以直接执行，并且执行速度最快的代码；</p></blockquote><ul><li>而 <code>undefined</code> 和 <code>null</code> 是特殊的:</li></ul><ol><li>undefined:是整数 <code>(-2)^30</code>(超出整数的范围的数字);</li><li>null: 是机器代码 <code>NULL</code> 指针,或者说是一个对象类型标记加上一个为 <code>0</code> 的引用;</li></ol><ul><li>好了,绕了这么远,该回来了,还是这个问题,为什么 <code>typeof null</code> 返回的是 <code>'object'</code>,这下子应该就很好理解了吧。</li><li>因为对象的类型标签是 <code>0</code>,由于 <code>null</code> 代表的是 <code>空指针</code>,在 <code>JavaScript</code> 中没有指针的概念,所以 <code>null</code> 32位全为 <code>0</code> 来表示。因此,<code>typeof null</code> 返回的是 <code>'object'</code>。</li><li>所以通过上面的总结, <code>null</code> 本质上是 <code>0</code>,请看以下代码示例:<pre class='language-javascript'><code>console.log(undefined + 1); // NaNconsole.log(null + 1); // 1</code></pre></li></ul><ul><li><code>null</code> 转化为 <code>number</code> 类型时,会转换为 <code>0</code>。</li><li><code>undefined</code> 转换为 <code>number</code> 类型时,会转换为 <code>NaN</code>。</li><li>那么使用上还有什么样的区别呢?继续上代码:<pre class='language-javascript'><code>function foo(x = 77, y = 'moment') {  console.log(x); // 77  console.log(y); // null}foo(undefined, null);const [x = 1, y = 2] = [undefined, null];console.log(x); // 1console.log(y); // null</code></pre></li></ul><p>神奇吧,刺激吧,但是结束了😏😏😏</p>",
        views: 985,
        likes: 120,
        stars: 24,  
        replies: 112,
      },
    };
  },
  getters: {},
  actions: {},
});
