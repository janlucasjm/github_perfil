import styles from './Login.module.css';

const Login = ({nomeUsuario, eventSearch}) => {
    return (
        <>
            {nomeUsuario.length == 0 && (
                <div className={styles.searchName}>
                    <>
                        <p>Digite seu nome de usuário:</p>
                        <input className='inputSearch' type="text" onBlur={eventSearch} />
                    </>
                </div>
            )}
        </>
    )
}

export default Login;