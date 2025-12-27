let args = process.argv;
for (let index = 2; index < args.length; index++) {
    let element = args[index];
    console.log("hello & welcome", element);
}