function getUniqueWords(string){
    let array1 = string.split(" ");
    let array2 = getUniqueWordsInArray(array1);
    let result = array2.join(" ");
    console.log(result);
}

function getUniqueWordsInArray(array){
    let result = [];
    for(let str of array){
        if (!result.includes(str)){
            result.push(str);
        }
    }
    return result;
}

getUniqueWords("easy come easy go");