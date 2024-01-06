import styles from './Perfil.module.css';

const Perfil = ({ nomeUsuario, eventSearch }) => {
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} alt="" />
            <h1 className={styles.name}>{nomeUsuario}</h1>

            <input type="text" onBlur={eventSearch}/>
        </header>
    )
}

export default Perfil;