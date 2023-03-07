var fs = require('fs');

console.log('excute me first')

console.time('task1');
setTimeout(() => {
    console.log('timeOut excuted');
    console.timeEnd('task1')
}, 1000);

console.time('task2');
fs.readFile('./file.md','utf8',(ee,content)=>{
    console.log('content');
    console.timeEnd('task2');
}
    )
    console.log('excute me last')