const quantidadeDeAlunos = 14;

for (let index = 0; index <= quantidadeDeAlunos; index++){
if (index === 0){
    console.log('O número é zero!');
} else if (index % 2 === 0){
    console.log('O número é par' + index);
} else {
    console.log('O número é ímpar' + index);
}

}