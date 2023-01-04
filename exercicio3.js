function vogais(palavra){
    return palavra.replace(/[bcdfghjklmnpqrstvwxyz]/gi,'')
}

const result = vogais("torres");
console.log (result);

