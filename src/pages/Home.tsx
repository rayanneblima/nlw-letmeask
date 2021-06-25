import { useHistory } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIcon from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';

export function Home() {
  const history = useHistory();

  function navigateToNewRoom() {
    history.push('/salas/nova');
  }

  return(
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Toda pergunta tem uma resposta.</strong>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImg} alt="LetMeAsk" />
          <button
            className="create-room"
            onClick={navigateToNewRoom}
          >
            <img src={googleIcon} alt="Logo da Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">Ou entre em uma sala</div>
          <form>
            <input
              type="text"
              placeholder="Digite o código da sala"
            />
            <Button
              type="submit"
            >
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}
