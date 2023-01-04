function reverseString(palavra){
    return palavra.split('').reverse().join('')
}

const result = reverseString("jabuticaba");
console.log(result);