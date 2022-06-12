


var cadastroAdotante = [{ "nome": "João da Silva", "cpf": "107.588.478-18", "data": "05/05/1977", 
                        "endereco": "R. das Flores, nº 87, B. Jardim, Belo Horizonte/MG", 
                        "telefone": "(31)98575-1898", "email": "jaozinhosilva07@gmail.com" }, 
                        
                        { "nome": "Maria Clara Santos", "cpf": "118.010.876-08", "data": "15/07/1994",
                        "endereco": "R. A, nº 7858, apto: 1004 B.Morumbi, São Paulo/MG", 
                        "telefone": "(31)91871-5589", "email": "clarinha.santos@gmail.com" },
                        
                        { "nome": "Daniel Ferreira", "cpf": "108.187.236-35", "data": "07/10/1985",
                        "endereco": "R. Sequoia, nº 807, apto: 701, B. Cidade Industrial, Contagem/MG",
                        "telefone": "(31)97889-0012", "email": "dan.ferreira1985@gmail.com" }];

function listarCadastroAdotante(){

    var textoHTML = "";

    for (let x = 0; x < cadastroAdotante.length; x++){

        textoHTML += `Nome: ${cadastroAdotante[x].nome}<br>
                    Cpf: ${cadastroAdotante[x].cpf}<br>
                    Data de Nascimento: ${cadastroAdotante[x].data}<br>
                    Endereço: ${cadastroAdotante[x].endereco}<br>
                    Telefone: ${cadastroAdotante[x].telefone}<br>
                    E-mail: ${cadastroAdotante[x].email} <br><br><br>`;

    };

    
    var telaAdotante = document.getElementById('telaAdotante');
    telaAdotante.innerHTML = textoHTML;

}



