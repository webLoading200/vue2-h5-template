/**
 * @name  是否ios
 * @returns {Boolean}
 */
export const isIos = () => {
  const u = navigator.userAgent;
  return Boolean(u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/));
};
/**
 * @name  计算时间差
 * @param {*} sDate1和sDate2是2006-12-18格式
 * @returns {Object}
 */
export const datedifference = (sDate1, sDate2) => {
  var dateSpan, tempDate, iDays;
  sDate1 = Date.parse(sDate1);
  sDate2 = Date.parse(sDate2);
  dateSpan = sDate2 - sDate1;
  dateSpan = Math.abs(dateSpan);
  iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
  return iDays;
};
/**
 * @name 日期处理
 * @param {*} date
 * @returns yy/mm/dd
 */
export const formatTime = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${[year, month, day].map(formatNumber).join("-")}`;
};

const formatNumber = (n) => {
  n = n.toString();
  return n[1] ? n : `0${n}`;
};
/**
 * @description 函数节流(每interval秒只执行一次)
 * @param     {Function}   fn  要节流的函数
 * @param    {Number}      delay 时间
 * @returns  {Function}
 * @constructor
 */
//节流throttle代码：
export const throttle = (fn, delay = 1000) => {
  let canRun = true; // 通过闭包保存一个标记
  return function () {
    // 在函数开头判断标记是否为true，不为true则return
    if (!canRun) return;
    // 立即设置为false
    canRun = false;
    // 将外部传入的函数的执行放在setTimeout中
    setTimeout(() => {
      // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。
      // 当定时器没有执行的时候标记永远是false，在开头被return掉
      fn.apply(this, arguments);
      canRun = true;
    }, delay);
  };
};
/**
 * 函数节流
 * @param fn
 * @param delay
 * @returns {Function}
 * @constructor
 */

export const throttleTimer = (fn, delay = 500) => {
  let valid = true;
  var num;
  return function () {
    var context = this;
    var args = arguments;
    if (!valid) {
      //休息时间 暂不接客
      return false;
    }
    // 工作时间，执行函数并且在间隔期内把状态位设为无效

    valid = false;
    num++;
    setTimeout(() => {
      fn.apply(context, args);
      valid = true;
    }, delay);
  };
};

//判断是否有网
export const onLine = (callback) => {
  return new Promise((res, rej) => {
    var img = new Image();
    //临时判断网络是否通畅
    img.src = "https://www.baidu.com/favicon.ico?_t=" + Date.now();
    img.onload = function () {
      res(true);
    };
    img.onerror = function () {
      rej(false);
    };
  });
};
//滚动到顶部
export const initScroll = (callback) => {
  setTimeout(() => {
    var progress =
      document.body.scrollTop || document.documentElement.scrollTop;
    //回调函数
    let n = progress / 10;

    function render() {
      progress -= n; //修改图像的位置
      if (progress > 0) {
        //在动画没有结束前，递归渲染
        document.body.scrollTop = progress;
        document.documentElement.scrollTop = progress;
        window.requestAnimationFrame(render);
      } else {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    }
    //第一帧渲染
    window.requestAnimationFrame(render);
  }, 0);
};
//延迟
export const sleep = (val = 2000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, val);
  });
};
//时间转换
export const time_to_sec = (time) => {
  if (time) {
    let s = "";
    let hour = time.split(":")[0];
    let min = time.split(":")[1];
    let sec = time.split(":")[2];
    s = Number(hour * 3600) + Number(min * 60) + Number(sec);
    return s;
  }
};
//时间
export const nowTime = () => {
  var aa = new Date().getTime();
  var aa = new Date(aa); // 中国标准时间
  var year = aa.getFullYear();
  var month = aa.getMonth() + 1;
  month = month > 10 ? month : "0" + month;
  var date = aa.getDate();
  date = date > 10 ? date : 0 + date;
  var hour = aa.getHours();
  hour = hour > 10 ? hour : 0 + hour;
  var minute = aa.getMinutes();
  minute = minute > 10 ? minute : 0 + minute;
  var second = aa.getSeconds();
  second = second > 10 ? second : 0 + second;
  var bb = hour + ":" + minute + ":" + second;
  return bb;
};
//时间日期精确到秒
export const nowTimeInfo = () => {
  var aa = new Date().getTime();
  var aa = new Date(aa); // 中国标准时间
  var year = aa.getFullYear();
  var month = aa.getMonth() + 1;
  month = month > 10 ? month : "0" + month;
  var date = aa.getDate();
  date = date > 10 ? date : 0 + date;
  var hour = aa.getHours();
  hour = hour > 10 ? hour : 0 + hour;
  var minute = aa.getMinutes();
  minute = minute > 10 ? minute : 0 + minute;
  var second = aa.getSeconds();
  second = second > 10 ? second : 0 + second;
  var bb =
    year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
  return bb;
};
//拼接请求
export const createUrl = (src, data) => {
  let url = "";
  for (let key in data) {
    url = url + key + "=" + data[key] + "&";
  }
  return (src + "?" + url).slice(0, (src + "?" + url).length - 1);
};
//获取服务器时间
export const getNetTime = () => {
  return new Promise((reslove, rej) => {
    fetch(window.location.href)
      .then((res) => res.headers.get("date"))
      .then((date) => {
        console.log("Server time: ", new Date(date));
        reslove(new Date(date).getTime());
      });
  });
};
