function calcular(n1,n2, op){
    switch (op){
        case 'somar':
        console.log (n1 + n2);
        break;
        case 'subtrair':
        console.log (n1 - n2);
        break;
        case 'multiplicar':
        console.log (n1 * n2);
        break;
        case 'dividir':
        console.log (n1 / n2);
        break;
        default:
        console.log("Operacao nao encontrada");
    }
}

calcular(2, 4, 'multiplicar')