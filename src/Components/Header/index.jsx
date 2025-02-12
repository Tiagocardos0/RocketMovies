import { Container, Profile } from './styles';

export function Header() {
  return (
    <Container >
      <h1>RocketMovies</h1>

      <form>
        <input type="search" id="search" placeholder="Pesquisar pelo título" />
      </form>

      <Profile>
        <img
          src="https://carapreta.vtexassets.com/arquivos/ids/155533/1018356-Hamburguer-Angus-120g--3-.png?v=638552090538800000"
          alt="Foto de usuário"
        />

        <div>
          <strong>Tiago Cardoso</strong>
          <span>Sair</span>
        </div>
      </Profile>
    </Container>
  );
}