import { useHistory } from 'react-router-dom'
import ilustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import { Button } from '../componentes/Button'

import '../styles/auth.scss'



export function Home() {
    const history = useHistory();

    function navigateToNewRoom() {
        history.push('/rooms/new');
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={ilustrationImg} alt="ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp; A ao-vivo</strong>
                <p>Tire suas duvidas da sua audiencia em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="" />
                    <button onClick={navigateToNewRoom} className="create-rom">
                        <img src={googleIconImg} alt="" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">Entre em uma sala</div>
                    <form >
                        <input type="text" placeholder="Digite o codigo da sala" />
                        <Button type="submit"> Entrar na sala</Button>

                    </form>
                </div>
            </main>
        </div>
    )

}