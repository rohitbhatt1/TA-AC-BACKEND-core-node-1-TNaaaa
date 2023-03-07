console.log('excute the First');

console.time('task1');
for(var i = 0; i < 1000000; i++){
// do some work
}

console.timeEnd('task1');
console.log('excute me last');