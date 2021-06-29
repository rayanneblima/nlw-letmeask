import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';

import '../styles/room.scss';

type RoomParams = {
  id: string;
}

export function Room() {
  const user = useAuth();
  const params = useParams<RoomParams>();
  const [newQuestion, setNewQuestion] = useState('');

  const roomId = params.id;

  async function handleSendQuestion() {
    if (newQuestion.trim() === '') {
      return
    }

    if (!user) {
      throw new Error
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.user?.name,
        avatar: user.user?.avatar
      }
    }
  }

  return(
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="LetMeAsk" />
          <RoomCode code={roomId} />
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala de React</h1>
          <span>4 perguntas</span>
        </div>

        <form>
          <textarea
            placeholder="Qual a sua dúvida hoje?"
            value={newQuestion}
            onChange={event => setNewQuestion(event.target.value)}
          />

          <div className="form-footer">
            <span>Para enviar uma pergunta, <button>faça seu login.</button></span>
            <Button type="submit">Enviar pergunta</Button>
          </div>
        </form>
      </main>
    </div>
  )
}