Funcionalidade: Filtrar tarefas por status

    Contexto: Como um usuário eu quero filtrar tarefas por status para que eu possa visualizar apenas as tarefas relevantes

    Cenário: Filtrar tarefas concluídas
        Dado que existem tarefas concluídas e não concluídas
        Quando eu seleciono o filtro "Concluídas"
        Então apenas as tarefas concluídas devem ser exibidas