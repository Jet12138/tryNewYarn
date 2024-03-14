let pro = process;

// process.version：返回一个字符串，表示当前使用的 Node 版本，比如v7.10.0。
// console.log(pro.version);   

// process.title：返回一个字符串，默认值为node，可以自定义该值。
// console.log(pro.title); 

// process.platform：返回一个字符串，表示当前的操作系统，比如Linux。
// console.log('表示当前的操作系统', pro.platform); 

// process.argv：返回一个数组，成员是当前进程的所有命令行参数。
// console.log(pro.argv); 


// script.js的代码为
console.log(process.execArgv);

