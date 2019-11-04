function calculaTabuada(){

    //Obtente do DOM o tbody da tabela
    let tabuada = document.querySelector("#tabuada tbody");
    //Obtendo o valor A do campo input number e convertendo em inteiro
    let valorA = parseInt(document.querySelector("#valorA").value);
    //Limpando o conteudo do tbody
    tabuada.innerHTML = '';
    //Criando um laço de repetição de 0 a 10
    for (let valorB = 0; valorB <= 10; valorB++) {

        //Calculando o resultado da linha atual
        let resultado = valorA * valorB;

        //Criando template das colunas da linha atual
        let template = `
            
                <td>${valorA}</td>
                <td>x</td>
                <td>${valorB}</td>
                <td>=</td>
                <td>${resultado}</td>
            
            `;
        //Criando o elemnto tr (são as linhas)
        let tr = document.createElement('tr');
        //Inserindo as coluas na linha
        tr.innerHTML = template;
        //Inserindo a linha na tabela
        tabuada.append(tr);

    }//Fechando o for

}//Fechando a função

//Chamando a nossa função pela primeira vez
calculaTabuada();

//Adicionando o evento de alteração ao compo número
document.querySelector("#valorA").addEventListener('change', calculaTabuada);