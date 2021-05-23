function factorial(num){
    for(let i = num - 1; i > 1; i--){
        num = num * i;
    }
    if (num === 0){
        num = 1;
    }
    return console.log(num);
}
factorial(7);
