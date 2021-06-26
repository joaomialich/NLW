

import { Link } from 'react-router-dom'
import ilustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import { Button } from '../componentes/Button'



import '../styles/auth.scss'
import { useAuth } from '../hooks/useAuth'



export function NewRoom() {
    const { user } = useAuth()
    return (
        <div id="page-auth">
            <aside>
                <img src={ilustrationImg} alt="ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp; A ao-vivo</strong>
                <p>Tire suas duvidas da sua audiencia em tempo real !!!</p>
            </aside>
            <main>

                <div className="main-content">
                    <img src={logoImg} alt="" />
                    <h1>{user?.name}</h1>
                    <h2>Criar uma nova sala </h2>
                    <form >
                        <input type="text" placeholder="Nome da sala" />
                        <Button type="submit"> Criar sala</Button>

                    </form>
                    <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui </Link></p>

                </div>
            </main>
        </div>
    )
}

