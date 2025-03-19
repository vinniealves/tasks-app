Funcionalidade: Adicionar uma tarefa

    Contexto: Como um usuário eu quero adicionar uma nova tarefa para que eu possa gerenciar minhas atividades

    Cenário: Adicionar uma tarefa com sucesso
        Dado que estou na tela de adicionar tarefa
        Quando eu preencho a descrição "Ir ao mercado"
        E clico em "Salvar"
        Então a tarefa "Comprar leite" deve ser exibida na lista de tarefas