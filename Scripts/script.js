window.onload = function() {

    let botoes_excluir = document.querySelectorAll('a.botao.excluir'); 
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
    })
}


