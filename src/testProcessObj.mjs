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

import moment from "moment";

//查本月
const startOfMonth = moment().startOf('month').format('YYYY-MM-DD');
console.log("Line 206: 本月的第一天 is", startOfMonth);
const thetoday = moment().startOf('day').format('YYYY-MM-DD')
console.log("Line 208: 当日 is", thetoday);

//查本季
const startOfQuarter = moment().startOf('quarter').format('YYYY-MM-DD');
console.log("Line 213: 当季的第一天 is", startOfQuarter);
const thetoday2 = moment().startOf('day').format('YYYY-MM-DD')
console.log("Line 215: 当日 is", thetoday2);

//查本年
const startOfYear = moment().startOf('year').format('YYYY-MM-DD');
console.log("Line 220: 当年的第一天 is", startOfYear);
const thetoday3 = moment().startOf('day').format('YYYY-MM-DD')
console.log("Line 222: 当日 is", thetoday3);

