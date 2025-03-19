export type Languages = {
    pt: string;
    en: string
}

type LanguagesSchema = {
    [Screen in string]: {
        [Text in string]: Languages;
    };
};

const TEXTS = {
    HOME: {
        TITLE: { pt: "Tarefas", en: "Tasks" },
        ADD_BUTTON: { pt: "Adicionar", en: "Add" },
        EMPTY_STATE: { pt: "Nenhuma tarefa encontrada", en: "No tasks found" },
        LOGIN_BUTTON: { pt: "Acessar", en: "Sign in" },
    },
    ADD_TASK: {
        TITLE: { pt: "Adicionar tarefa", en: "Add task" },
    },
    LOGIN: {
        TITLE: { pt: "Acessar", en: "Sign in" },
    },
} satisfies LanguagesSchema;

export default TEXTS