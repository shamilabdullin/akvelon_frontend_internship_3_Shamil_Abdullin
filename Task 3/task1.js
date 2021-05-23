function reverseBits(number){
    console.log(number);
    let binaryNumber = number.toString(2);
    let reverseBinaryNumber = binaryNumber.split('').reverse().join('');
    let reverseNumber = parseInt(reverseBinaryNumber, 2);
    console.log(reverseNumber);
}
reverseBits(417);
