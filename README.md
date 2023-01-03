# Lista-de-tarefas
 projeto de estudos para exercitar a logica basica de programação atraves de JavaScript puro.

O projeto contem alguns bugs como:
    1 Ao adicionar tarefas e atualizar a pagina, não é possivel apagar ou editar tarefas
    2 Após apagar uma tarefa, as tarefas posteriores não podem ser editadas 

 Link do projeto:
 https://rodrigocostadev.github.io/Lista-de-tarefas-todolist/

NOTA, POSSUI BUGS: 
    Na função editar eu precisava pegar o id com o numero do input para conseguir manipulalo, 
mas como ja pego id's com numeros das divs das tarefas não foi possivel, sendo assim tentei pegar o input 
pela classe e pela tag, funciona até apagar uma tarefa, apos isso os botões de editar das tarefas posteriores 
em relação a div que foi apagada não funcionam mais, pois a logica que usei foi a seguinte, se o id do 
botão clicado de editar for igual ao index da classe ou da tag vai editar a tarefa, ao apagar a tarefa 
o id do botão editar é apagado com toda a tarefa, e o index  da tag que foi apagada é substituida e nao apagada.
    Sendo assim não encontrei outra forma de concluir o projeto.
