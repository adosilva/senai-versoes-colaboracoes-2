let data = prompt('A data do evento é hoje?');

if(data == 'Sim' || data == 'SIM' || data == 'sim'){
    alert('Evento permitido');
  
  }else if(data == 'Nao' || data == 'nao' || data == 'NAO'){
    alert('Evento não permitido por data inválida');
    
  }

let idade = prompt('Quantos anos você tem?');

if(idade >= 18){
    alert('Cadastro permitido!');

}else if (idade !== 18){
    alert('Cadastro não é permitido pela idade.')
}

let numero = prompt('Infome o número de participantes e palestrantes.');

if(numero < 100){
    alert('Permitir cadastro');

} else if(numero >= 100){
    alert('O cadastro não será permitido por ter excedido o limite');
}

