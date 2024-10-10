/*
    require.context(arg1,arg2,arg3)
        arg1 - 表示检索的目录
        arg2 - 表示是否检索子文件夹
        arg3 - 匹配文件的正则表达式,一般是文件名
*/
// 可行了
import path from "path-browserify";
const files = require.context("@/views/Home/components", true, /\.vue$/); // param1:路径；param2: 是否搜索子文件夹：param3: 文件类型，可正则
const comModules = {};
const names = [];
// 组件导入
files.keys().forEach((key) => {
  const name = path.basename(key, ".vue");
  names.push(name);
  /**
   * path.basename获取vue文件名，也可以用正则表达式匹配
   * key.replace(/^\.\/(.*)\.\w+$/, '$1')
   **/
  comModules[name] = files(key).default || files(key);
});
export default comModules;
