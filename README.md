# uni-demo
uni-demo包含router管理，tabbar案例，登录跳转，uview库组件使用，api封装、mock数据、crypto-js的加密测试、组件传值的案例

### 安装
npm install   必须使用npm镜像，cnpm可能会导致错误

### 运行
下载使用HBuildX，插件市场安装node-sass，点击运行  




## router的使用
###### 关于router的替换声明，为更好的router拦截跳转，不再使用uni进行跳转

**this.$Router.push 等同 uni.navgateTo()**
这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL。
```javascript
/ /字符串
this.$Router.push('/pages/router/router1')
// 对象
this.$Router.push({path:'/pages/router/router1'})
// 命名的路由
this.$Router.push({ name: 'router1', params: { userId: '123' }})
// 带查询参数，变成 /router1?plan=private
this.$Router.push({ path: 'router1', query: { plan: 'private' }})
```
**router.replace() 等同于 uni.redirectTo()**
跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。
```javascript
this.$Router.replace(...)
```
**router.replaceAll() 等同于 uni.reLaunch()**
跟 router.replace 很像，唯一的不同就是，它不会向 history 添加新记录，而是将所有的页面都关掉，打开一个新的页面。
```javascript
this.$Router.replaceAll(...)
```
**router.pushTab() 等同于 uni.switchTab()**
跟 router.push 很像，打开 uni-app 自带的tab 菜单
```javascript
this.$Router.pushTab(...)
```
**router.back(n) 等同于 uni.navigateBack()**
这个方法的参数是一个正整数，意思是在 history 记录中后退多少步，类似 window.history.go(n)
```javascript
// 后退 2 步记录
this.$Router.back(2)
// 如果 history 记录不够用，那就默默地失败呗
this.$Router.back(100)
```
