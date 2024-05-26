import { Example } from "./Example";

import styles from "./Example.module.css";

const DEFAULT_EXAMPLES: string[] = [
    "Apresente-se",
    "O que são substantivos?",
    "O que é a natureza? Em que manual escolar se encontra essa matéria? Faça o plano de aula e uma prova com a chave."
];

const GPT4V_EXAMPLES: string[] = [
    "Apresente-se",
    "O que são substantivos?",
    "O que é a natureza? Em que manual escolar se encontra essa matéria? Faça o plano de aula e uma prova com a chave."
];

interface Props {
    onExampleClicked: (value: string) => void;
    useGPT4V?: boolean;
}

export const ExampleList = ({ onExampleClicked, useGPT4V }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {(useGPT4V ? GPT4V_EXAMPLES : DEFAULT_EXAMPLES).map((question, i) => (
                <li key={i}>
                    <Example text={question} value={question} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
