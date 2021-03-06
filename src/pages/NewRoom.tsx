
import { useState } from 'react'
import { FormEvent } from 'react'
import { Link, useHistory } from 'react-router-dom'
import ilustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import { Button } from '../componentes/Button'
import { database } from '../services/firebase'



import '../styles/auth.scss'
import { useAuth } from '../hooks/useAuth'



export function NewRoom() {
    const { user } = useAuth()
    const history = useHistory()

    const [newRoom, setNewRoom] = useState('');

    async function handleCreatRoom(event: FormEvent) {
        event.preventDefault();

        if (newRoom.trim() === '') {
            return;
        }


        const roomRef = database.ref('rooms');

        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id,
        })

        history.push(`/rooms/${firebaseRoom.key}`)





    }
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
                    <h2>Criar uma nova sala </h2>
                    <form onSubmit={handleCreatRoom}>
                        <input type="text" placeholder="Nome da sala" onChange={event => setNewRoom(event.target.value)} value={newRoom} />
                        <Button type="submit"> Criar sala</Button>

                    </form>
                    <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui </Link></p>

                </div>
            </main>
        </div>
    )
}

