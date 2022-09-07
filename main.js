function media(){
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value);
    var nota4 = parseFloat(document.getElementById('nota4').value);

    var media = (nota1 + nota2 + nota3 + nota4) / 4;

    if (media > 7 && media <= 10) {
        document.querySelector('p').innerHTML = `A nota do aluno é ${media} e o aluno está aprovado.`;
    } else if (media <= 7 && media >= 5) {
        document.querySelector('p').innerHTML = `A nota do aluno é ${media} e está aprovado com distinção.`;
    } else {
        document.querySelector('p').innerHTML = `A nota do aluno é ${media} aluno está reprovado.`;
    }
}