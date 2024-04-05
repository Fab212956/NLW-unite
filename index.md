#HTML

*As tags podem receber atributos* 
Exemplo: <table width="100%"> (Aqui estamos colocando um espaçamento)

<br> Comando para quebra de linha

*O código abaixo chama-se TAG. Ele tem uma abertura da TAG e o fechamento da TAG e serve para criar um título do site* 
<h1> (H1 é um cabeçalho HTML)
Título 
</h1>


*O código abaixo se chama de TAG link(hyperlink)*
<a href="https://google.com">google.com</a>


*O código abaixo serve para criar uma tabela. <table> HTML representa dados tabulares — isto é, informações apresentadas em uma tabela bidimensional composta por linhas e colunas de células contendo dados* 
<table>
<thead>
  <tr>
    <th>Participante</th>
    <th>Data da Inscrição</th>
    <th>Data do check-in</th>
  </tr>
</thead>
  </table>

  *Criar um campo de texto com: nome, e-mail e botão de inscrição*
<form onsubmit="adicionarParticipante(event)">
  <fieldset>
  <legend>Inscrição</legend>

  <div>
    <input 
      type="text"
      placeholder="Nome Completo"
      name="nome"
>
  <input
    type="email"
    placeholder="Email"
    name="email"
  >
  <button>
    REALIZAR INSCRIÇÃO
      </div>
    </fieldset>
</form>

  #JavaScript
  ```js
  // variaveis 
const mensagem = 'Oi, tudo bem?'
// tipos de dados 
//numer
//string (Significa texto)
// funcao
alert(mensagem)


// objeto javascript
const participante = {
  nome: "Mayk Brito",
  email: "mayk@hgmail.com",
  dataInscricao: new Date(2024, 2, 22, 19, 20),
  dataCheckIn: new Date(2024, 2, 25, 22, 00)
}
//let permite que no futuro o valor seja alterado
let participantes = [
  {
    nome: "Mayk Brito",
    email: "mayk@hgmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 00)
  }
]

//estrutura de repetição - loop
for(let participante of participantes) {
  //faça alguma coisa aqui
  // enquanto tiver pessoas nessa lista
  ```