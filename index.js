
let participantes = [
  {
    nome: "Mayk Brito",
    email: "mayk@gmail.com",
    dataInscricao: new Date(2024, 2, 23, 19, 23),
    dataCheckIn: new Date(2024, 2, 22, 22, 00) 
  },
  {
    nome: "Diego Fernandes",
    email: "diego@gmail.com",
    dataInscricao: new Date(2024, 1, 2, 19, 23),
    dataCheckIn: new Date(2024, 1, 5, 20, 20) 
  },
  {
    nome: "João Silva",
    email: "joao@gmail.com",
    dataInscricao: new Date(2024, 0, 3, 19, 23),
    dataCheckIn: new Date(2024, 0, 10, 18, 15) 
  },
  {
    nome: "Maria Souza",
    email: "maria@gmail.com",
    dataInscricao: new Date(2023, 11, 4, 19, 23),
    dataCheckIn: new Date(2023, 11, 20, 21, 30) 
  },
  {
    nome: "Pedro Oliveira",
    email: "pedro@gmail.com",
    dataInscricao: new Date(2023, 10, 5, 19, 23),
    dataCheckIn: new Date(2023, 5, 15, 20, 30)
  },
  {
    nome: "Ana Santos",
    email: "ana@gmail.com",
    dataInscricao: new Date(2023, 9, 6, 19, 23),
    dataCheckIn: new Date(2023, 9, 28, 17, 10) 
  },
  {
    nome: "Lucas Pereira",
    email: "lucas@gmail.com",
    dataInscricao: new Date(2023, 8, 7, 19, 23),
    dataCheckIn: new Date(2023, 8, 18, 22, 55) 
  },
  {
    nome: "Carla Oliveira",
    email: "carla@gmail.com",
    dataInscricao: new Date(2023, 7, 8, 19, 23),
    dataCheckIn: new Date(2023, 7, 22, 16, 40) 
  },
  {
    nome: "Rafaela Costa",
    email: "rafaela@gmail.com",
    dataInscricao: new Date(2023, 6, 9, 19, 23),
    dataCheckIn: new Date(2023, 6, 30, 23, 59) 
  },
  {
    nome: "Marcos Lima",
    email: "marcos@gmail.com",
    dataInscricao: new Date(2023, 5, 10, 19, 23),
    dataCheckIn: new Date(2023, 5, 15, 20, 30) 
  }
];

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao);

  let dataCheckIn = '';

  // Verifica se o check-in já foi feito
  if (participante.dataCheckIn == null) {
    dataCheckIn = `
      <button
        data-email="${participante.email}"
        onclick="fazerCheckIn(event)"
      >
        Confirmar check-in
      </button>
    `;
  } else {
    dataCheckIn = 'Check-in confirmado';
  }

  return `
    <tr>
      <td>
        <strong>${participante.nome}</strong><br>
        <small>${participante.email}</small>
      </td>
      <td>${dataInscricao}</td>
      <td>${dataCheckIn}</td>
    </tr>
  `;
};


const atualizarLista = (participantes) => {
  let output = ""

  for(let participante of participantes) {
    output = output + criarNovoParticipante(participante)
  }

  document.querySelector('tbody').innerHTML = output
}

atualizarLista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()

  const dadosDoFormulario = new FormData(event.target)

  const participante = {
    nome: dadosDoFormulario.get('nome'),
    email: dadosDoFormulario.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null
  }

  const participanteExiste = participantes.find(
    (p) => p.email == participante.email
    
  )

  if(participanteExiste) {
    alert('Email já cadastrado')
    return
  }

  participantes = [participante, ...participantes]
  atualizarLista(participantes)

  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""

}

const fazerCheckIn = (event) => {  

  const Confirmacao = 'Tem certeza que deseja fazer o check-in?'

  if(confirm(Confirmacao) == false) {
    return 
  }
  
  const participante = participantes.find((p) => {
    return p.email == event.target.dataset.email
  })

  participante.dataCheckIn = new Date()

  atualizarLista(participantes)
}

