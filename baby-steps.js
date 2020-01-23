var sum = 0;

for (var i = 2; i < process.argv.length; i++) { // process.argv == an array
    sum += Number(process.argv[i]);
}

console.log(sum)