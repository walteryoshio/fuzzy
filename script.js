
var umidade = 80;
var temperatura = 12;
var valorTemperatura;
var valorUmidade;

function medidaTemperatura(temperatura){
    if(temperatura < 15){
        valorTemperatura = 'baixa'
    }else if(temperatura >= 16 && temperatura <= 18){
        valorTemperatura = 'media'
    }else if(temperatura > 18){
        valorTemperatura = 'alta'
    }

    return(valorTemperatura)
}

function medidaUmidade(umidade){
    if(umidade < 50){
        valorUmidade = 'baixa'
    }else if(umidade >= 50 && umidade <= 70){
        valorUmidade = 'ideal'
    }else if(umidade > 70){
        valorUmidade = 'alta'
    }
    
    return(valorUmidade)
}

function Fuzzy(valorTemperatura, valorUmidade){

    var condicao
    if(valorTemperatura == 'baixa' && valorUmidade == 'baixa'){
        condicao = 'ameno'
    }else if(valorTemperatura == 'baixa' && valorUmidade == 'ideal'){
        condicao = 'ameno'
    }else if(valorTemperatura == 'baixa' && valorUmidade == 'alta'){
        condicao = 'amenoChuvoso'
    }else if(valorTemperatura == 'ideal' && valorUmidade == 'baixa'){
        condicao = 'calor'
    }else if(valorTemperatura == 'ideal' && valorUmidade == 'ideal'){
        condicao = 'media'
    }else if(valorTemperatura == 'ideal' && valorUmidade == 'alta'){
        condicao = 'calorChuvoso'
    }else if(valorTemperatura == 'alta' && valorUmidade == 'baixa'){
        condicao = 'calor'
    }else if(valorTemperatura == 'alta' && valorUmidade == 'ideal'){
        condicao = 'calor'
    }else if(valorTemperatura == 'alta' && valorUmidade == 'alta'){
        condicao = 'calorChuvoso'
    }
    
    return(condicao)
}

 function resolucao(){
    const resolTemp =  medidaTemperatura(temperatura)
    const resolUmidade =  medidaUmidade(umidade)
    const fuzzy = Fuzzy(resolTemp, resolUmidade)

    return (fuzzy)

}

console.log( resolucao())