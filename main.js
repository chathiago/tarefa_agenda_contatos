const form = document.getElementById('form-agenda')
const inputNomeContato = document.getElementById('nome-contato')
const inputNumeroContato = document.getElementById('numero-contato')
const nomes = []
const numero = []
let linhas = ''

form.addEventListener('submit', function (e) {
    e.preventDefault()

    adicionarLinha()
    atualizarTabela()

})

function adicionarLinha() {

    if(nomes.includes(inputNomeContato.value)) {
        alert(`O nome: ${inputNomeContato.value} já existe`)
    } else {
        nomes.push(inputNomeContato.value)
        numero.push(inputNumeroContato.value)

        let linha = '<tr>'
        linha += `<td>${inputNomeContato.value}</td>`
        linha += `<td>${inputNumeroContato.value}</td>`
        linha += '</tr>'

        linhas += linha

    }

    inputNomeContato.value = ''
    inputNumeroContato.value = ''
}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}