//当前模块是对api进行统一管理
import requests from "./ajax";
import mockRequests from './mockAjax'
 
//三级联动接口
//请求地址：/api/product/getBaseCategoryList  请求方式：get   无参数
//发请求:axios发送请求返回的结果是promise对象

export const reqCategoryList = () => requests({url: '/product/getBaseCategoryList', method: 'get'})//是下面的简化写法


// export const reqCategoryList = () => {
//     //发请求:axios发送请求返回的结果是promise对象
//     return requests({url: '/product/getBaseCategoryList', method: 'get'})
// }

//获取banner首页轮播图接口
export const reqGetBannerList = ()=>mockRequests.get('/banner')

//获取floor数据
export const reqFloorList = ()=>mockRequests.get('/floor')

//获取搜索模块的数据 地址：/api/list    请求方式：post   参数：请求要带参数

//此接口给服务器传递默认参数params，至少是一个空对象，不然请求会失败
export const reqGetSearchInfo = (params)=>requests({url:'/list',method:'post',data:params})

//获取产品详情接口 地址：/api/item/{ skuId }   请求方式：get   参数：请求要带id参数
export const reqGoodsInfo = (skuId)=>requests({url:`/item/${skuId}`,method:'get'})

// /api/cart/addToCart/{ skuId }/{ skuNum }  post
//将产品添加到购物车（获取更新某一个产品的个数）
export const reqAddOrUpdateShopCart = (skuId,skuNum)=>requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'})

// /api/cart/cartList  get
//获取购物车列表数据接口
export const reqCartList = ()=>requests({url:'/cart/cartList',method:'get'})

//删除购物车商品
// /api/cart/deleteCart/{skuId}  delete
export const reqDeleteCartById = (skuId)=>requests({url:`/cart/deleteCart/${skuId}`,method:'delete'})

//修改商品的选中状态
// /api/cart/checkCart/{skuId}/{isChecked}    get
export const reqUpdateCheckedById = (skuId,isChecked)=>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})

//获取验证码
// /api/user/passport/sendCode/{phone}   get
export const reqGetCode = (phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:'get'})

//注册用户
// /api/user/passport/register   post  phone password code
export const reqUserRegister = (data)=>requests({url:`/user/passport/register`,data,method:'post'})

//登录接口
// /api/user/passport/login  post phone password
export const reqUserLogin = (data)=>requests({url:`/user/passport/login`,data,method:'post'})

//获取用户的信息【带着用户的token要用户信息】
// /api/user/passport/auth/getUserInfo   get
export const reqUserInfo = ()=>requests({url:`/user/passport/auth/getUserInfo`,method:'get'})

//退出登录接口
// /api/user/passport/logout get
export const reqLoginOut = ()=>requests({url:`/user/passport/logout`,method:'get'})

//获取用户地址信息
// /api/user/userAddress/auth/findUserAddressList get
export const reqAddressInfo = ()=>requests({url:`/user/userAddress/auth/findUserAddressList`,method:'get'})

//获取订单交易页信息
// /api/order/auth/trade get
export const reqOrderInfo = ()=>requests({url:`/order/auth/trade`,method:'get'})

//提交订单接口
// /api/order/auth/submitOrder?tradeNo={tradeNo} post
export const reqSubmitOrder = (tradeNo,data)=>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'})

//获取支付信息
// /api/payment/weixin/createNative/{orderId} get
export const reqPayInfo = (orderId)=>requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'})

//获取支付订单状态
// /api/payment/weixin/queryPayStatus/{orderId}  get
export const reqPayStatus = (orderId)=>requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'})

//获取个人中心的数据
// /api/order/auth/{page}/{limit} get
export const reqMyOrderList = (page,limit)=>requests({url:`/order/auth/${page}/${limit}`,method:'get'})
