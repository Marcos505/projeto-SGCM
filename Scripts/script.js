/*let botoes_excluir = document.querySelectorAll('a.botao.excluir'); 
    botoes_excluir.forEach(item => {
        item.addEventListener('click', () => {
            if (confirm('Deseja realmente excluir?')) {
                item.parentNode.parentNode.remove();
            }
        })
    });

    let botao_editar = document.querySelectorAll('a.botao.editar')
    botao_editar.forEach(item => {
        item.addEventListener('click', () => {
            if(confirm('Deseja editar o conteúdo?')) {
                
            }
        })
    })*/
class Funcioario {

    constructor(){
        this.id = 1;
        this.arrayPessoas = []
    }

    salvar() {
        let pessoa = this.lerDados();

        if(this.validaCampos(pessoa)){
            this.adicionar(pessoa);
        }
    }

    adicionar(pessoa) {
        this.arrayPessoas.push(pessoa);
        this.id++;
    }

    lerDados() {
        let pessoa  = {}

        pessoa.idPessoa = this.id
        pessoa.nomePessoa = document.getElementById('nome').value;
        pessoa.registroPessoa = document.getElementById('registro').value;
        pessoa.especialidadePessoa = document.getElementById('especialidade').value;
        pessoa.unidadePessoa = document.getElementById('unidade').value;
        pessoa.telefonePessoa = document.getElementById('telefone').value;
        pessoa.emailPessoa = document.getElementById('email').value;

        return pessoa;
    }

    validaCampos(pessoa) {
        let msg = '';
        
        if(pessoa.nomePessoa == ''){
            msg += '- Informe o Nome do Produto'
        }
        if(pessoa.registroPessoa == ''){
            msg += '- Informe o registro'
        }
        if(pessoa.especialidadePessoa == ''){
            msg += '- Informe a sua Especialidade'
        }
        if(pessoa.unidadePessoa == ''){
            msg += '- Informe a unidade'
        }
        if(pessoa.telefonePessoa == ''){
            msg += '- Informe o seu telefone'
        }
        if(pessoa.emailPessoa == ''){
            msg += '- Informe o seu email'
        }

        if(msg != ''){
            alert(msg);
            return false;
        }
        
        return true;

    }

    cancelar() {
        alert('Cancelar');
    }
}

let pessoa =  new Funcioario();