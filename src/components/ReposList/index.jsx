import { useEffect, useState } from "react";

import styles from './ReposList.module.css';

const ReposList = ({nomeUsuario}) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        setEstaCarregando(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout( () => {
                setEstaCarregando(false)
                setRepos(resJson)
            }, 2000);
        })
    }, [nomeUsuario])

    return (
        <div className="container">
            {estaCarregando ? (
                <h1 className={styles.itemLoading}></h1>
            ) : (
            <ul className={styles.list}>
                {repos.map(({id, name, language, html_url} = repositorio) => (
                    <li key={id} className={styles.listItem}>
                        <div className={styles.listName}>
                        <b>Nome:</b> {name}
                        </div>

                        <div className={styles.listLanguage}>
                        <b>Linguagem:</b> {language}
                        </div>

                        <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no GitHub</a>
                    </li>
                ))}
            </ul>
            )}
        </div>
    )
}

export default ReposList;