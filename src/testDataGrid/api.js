const Koa = require('koa');
const app = new Koa();
const route = require('koa-route');
const port = 8081;



// express 框架的写法
// app.use("*", function (req, res, next) {
//     //设置允许跨域的域名，*代表允许任意域名跨域
//     res.header("Access-Control-Allow-Origin", "*");
//     //允许的header类型
//     res.header("Access-Control-Allow-Headers", "content-type");
//     //跨域允许的请求方式 
//     res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS,PUT,DELETE");
// });



// 网上搜的，设置koa允许跨域。没起作用。
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'content-type');
    ctx.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    await next()
    // 允许所有跨域
    if (ctx.request.method === 'OPTIONS') {
        console.log('跨域请求')
        ctx.response.status = 200
        ctx.response.message = 'OK'
    }
})


// 文档来源  https://www.cnblogs.com/crazycode2/p/11100298.html
const cors = require('koa2-cors');
// 允许跨域访问
app.use(cors({
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization', 'Date'],
    maxAge: 108000,
    credentials: true,
    allowMethods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Custom-Header', 'anonymous'],
}));


const about = ctx => {
    ctx.response.type = 'html';
    ctx.response.body = '<a href="/">Index Page</a>';
};

const helloworld = ctx => {
    ctx.response.type = 'html';
    ctx.response.body = '<h1>helloworld</h1><hr/><br/><a href="/">Index Page</a>';
};

const main = ctx => {
    ctx.response.body = 'Hello World, the serve api path you request is / ';
};

app.use(route.get('/', main));
app.use(route.get('/about', about));
app.use(route.get('/helloworld', helloworld));




// 我编写的：
const SearchEmployees = ctx => {
    ctx.response.body = JSON.stringify(
        { "data": [{ "dept_id": "xz", "country": null, "married": null, "birthday": null, "salary": null, "educational": null, "name": "aa", "school": null, "educational_name": null, "createtime": "2024-03-14T16:01:08", "gender": 2, "email": null, "city": null, "position_name": null, "position": null, "id": "60f45a66-85f7-46af-9172-52c0076bd231", "loginname": "aa", "remarks": null, "age": null, "dept_name": null }, { "dept_id": "sc", "country": "", "married": 0, "birthday": "2024-03-04T00:00:00", "salary": "1", "educational": "", "name": "1", "school": "", "educational_name": null, "createtime": "2024-03-14T14:23:13", "gender": 1, "email": null, "city": "", "position_name": null, "position": "", "id": "af70e755-3d26-40dd-8d62-e2af2eb43398", "loginname": "1", "remarks": "", "age": 25, "dept_name": "市场销售部" }, { "dept_id": "rs", "country": "", "married": 1, "birthday": "1981-01-14T00:00:00", "salary": "476000", "educational": "2", "name": "张伟", "school": "南京工业大学", "educational_name": "本科", "createtime": "2024-03-14T13:11:34", "gender": 1, "email": "zw@hotmail.com", "city": "", "position_name": "人事助理", "position": "rs2", "id": "3e3976e3-67aa-4d39-ac1e-08aaa5475a94", "loginname": "zw@hotmail.com", "remarks": "", "age": 31, "dept_name": "人事部" }, { "dept_id": "rs", "country": "", "married": 1, "birthday": "1981-01-14T00:00:00", "salary": "4760", "educational": "2", "name": "张伟", "school": "南京工业大学", "educational_name": "本科", "createtime": "2024-03-14T13:11:33", "gender": 1, "email": "zw@hotmail.com", "city": "", "position_name": "人事助理", "position": "rs2", "id": "b070a28a-bb7e-42b2-8f34-65be1da70e35", "loginname": "zw@hotmail.com", "remarks": "", "age": 31, "dept_name": "人事部" }, { "dept_id": "rs", "country": "", "married": 1, "birthday": "1981-01-14T00:00:00", "salary": "4760", "educational": "2", "name": "张伟", "school": "南京工业大学", "educational_name": "本科", "createtime": "2024-03-14T13:11:33", "gender": 1, "email": "zw@hotmail.com", "city": "", "position_name": "人事助理", "position": "rs2", "id": "69a4810a-c29a-4c51-a06d-087471f8d82d", "loginname": "zw@hotmail.com", "remarks": "", "age": 31, "dept_name": "人事部" }, { "dept_id": "rs", "country": "", "married": 1, "birthday": "1981-01-14T00:00:00", "salary": "4760", "educational": "2", "name": "张伟", "school": "南京工业大学", "educational_name": "本科", "createtime": "2024-03-14T13:11:31", "gender": 1, "email": "zw@hotmail.com", "city": "", "position_name": "人事助理", "position": "rs2", "id": "468162e4-73df-4cda-845b-e025745f36bd", "loginname": "zw@hotmail.com", "remarks": "", "age": 31, "dept_name": "人事部" }, { "dept_id": "rs", "country": "", "married": 1, "birthday": "1981-01-14T00:00:00", "salary": "4760", "educational": "2", "name": "张伟", "school": "南京工业大学", "educational_name": "本科", "createtime": "2024-03-14T13:11:31", "gender": 1, "email": "zw@hotmail.com", "city": "", "position_name": "人事助理", "position": "rs2", "id": "fd225ea5-6751-43ea-82a8-7a0c4b2e87ba", "loginname": "zw@hotmail.com", "remarks": "", "age": 31, "dept_name": "人事部" }, { "dept_id": "rs", "country": "", "married": 1, "birthday": "1981-01-14T00:00:00", "salary": "4760", "educational": "2", "name": "张伟", "school": "南京工业大学", "educational_name": "本科", "createtime": "2024-03-14T13:11:30", "gender": 1, "email": "zw@hotmail.com", "city": "", "position_name": "人事助理", "position": "rs2", "id": "f2b39811-c367-4dfe-a2f5-724f220691ba", "loginname": "zw@hotmail.com", "remarks": "", "age": 31, "dept_name": "人事部" }, { "dept_id": "rs", "country": "", "married": 1, "birthday": "1981-01-14T00:00:00", "salary": "4760000", "educational": "2", "name": "张伟123", "school": "南京工业大学123", "educational_name": "本科", "createtime": "2024-03-14T13:11:29", "gender": 1, "email": "zw@hotmail.com", "city": "", "position_name": "人事助理", "position": "rs2", "id": "3ffe2fe9-e917-4829-abd6-fcbbae3e3fda", "loginname": "zw@hotmail.com", "remarks": "", "age": 31, "dept_name": "人事部" }, { "dept_id": "cw", "country": null, "married": null, "birthday": "2024-03-14T00:00:00", "salary": null, "educational": null, "name": "1", "school": null, "educational_name": null, "createtime": "2024-03-14T11:38:14", "gender": 1, "email": null, "city": null, "position_name": null, "position": null, "id": "8f1c5ec9-850d-4fb7-92fd-f108f790fb20", "loginname": "1", "remarks": null, "age": 0, "dept_name": "财务部" }], "avgAge": 27.2045, "maxAge": 37, "total": 45, "minAge": 0 } 
    );
};
app.use(route.get('/SearchEmployees', SearchEmployees));

app.listen(port, function () {
    console.log(`server is running, and listening the port ${port} !!!`);
});
