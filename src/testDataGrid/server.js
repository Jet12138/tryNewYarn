// 导入基础资源
const Koa = require('koa');
const path = require('path');
const serve = require('koa-static');

// 各种基础设置
const port = 3000;

//开始实例化，开始干活：
const app = new Koa();
const main = serve(path.join(__dirname));

app.use(main);

// 启动！
app.listen(port, function () {



    console.log('%c ******', 'font-size:13px; background:pink; color:#bf2c9f;', '\n')
    console.log('%c ******', 'font-size:13px; background:pink; color:#bf2c9f;', '\n')
    console.log('%c ******', 'font-size:13px; background:pink; color:#bf2c9f;', '\n')
    console.log(`server is running, and listening the port ${port} !!!`);
    console.log('%c ******', 'font-size:13px; background:pink; color:#bf2c9f;', '\n')
    console.log('%c ******', 'font-size:13px; background:pink; color:#bf2c9f;', '\n')
    console.log('%c ******', 'font-size:13px; background:pink; color:#bf2c9f;', '\n')
});

