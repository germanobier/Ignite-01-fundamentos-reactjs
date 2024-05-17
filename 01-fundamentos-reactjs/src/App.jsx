import { Post } from './Post';
import { Header } from './components/Header';
import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <Post 
      author="Germano Bier"
      content="Post muito legal"
      />
      <Post 
      author="Diego Fernandes"
      content="Novo post muito legal"
      />
    </div>
  )
}

