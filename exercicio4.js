function diaDaSemana(data){
    const semana = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];
    const dia = new Date(data);
        
    console.log(semana[dia.getDay()]);

}

diaDaSemana("12/07/2022")
