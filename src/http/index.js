import axios from "axios";
import store from "@/store/index";
console.log(process.env.VUE_APP_LOGIN_URL)
const service = axios.create({
  baseURL: process.env.VUE_APP_LOGIN_URL, // 在请求中进行配置
  timeout: 10000,
});
service.interceptors.request.use((config) => {
  store.state.apiLoading += 1;
  //加入 Token 数据...
  //例如: 将 Token 从 localStorage 中取出来，加入到请求头中
  let username = localStorage.getItem("username");
  let token = localStorage.getItem("token");
  //2.将 用户名 和 token 添加到 config 中
  config.headers.set("username", username);
  config.headers.set("token", token);
  console.log("请求拦截器");
  return config;
});
service.interceptors.response.use(
  (success) => {
    store.state.apiLoading -= 1;
    //业务逻辑处理...
    console.log("成功：响应拦截器");
    return success;
  },
  (error) => {
    store.state.apiLoading -= 1;
    //业务逻辑处理...
    //例如：
    if (error.response.status == 403) {
      //跳转主页面
      router.push({ name: "Login" });
      alert("很抱歉，您没有权限，请登录！");
    }
    //将异常传递给下一个处理
    return Promise.reject(error);
  }
);
export default service;
