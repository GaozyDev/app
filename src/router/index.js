//配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'
//使用插件
Vue.use(VueRouter)
//引入路由组件
import routes from "@/router/routes";
//先把VueRouter原型对象上的push方法保存一份
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

//重写push|replace方法以彻底解决编程式导航进行路由跳转的时候，多次执行会抛出NavigationDuplicated的警告
//第一个参数：是告诉原来的push方法，你往哪里跳转以及传递哪些参数
//第二个参数：是成功的回调
//第三个参数：是失败的回调
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        //call和apply相同点：都可以调用函数一次，都可以篡改函数的上下文一次；
        //不同点：call和apply传递参数时，call传递多个参数用逗号隔开，apply传递数组参数
        originPush.call(this, resolve, reject)
    } else {
        originPush.call(this, location, () => {}, () => {})
    }
}
VueRouter.prototype.replace = function(location,resolve,reject) {
    if(resolve && reject) {
        originReplace.call(this,location,resolve,reject)
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}
//配置路由
export default new VueRouter({
    //配置路由
    routes,
    scrollBehavior (to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return {y: 0}
    }
})