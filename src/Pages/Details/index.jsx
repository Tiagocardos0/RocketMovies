import { Container } from './styles';

import { Header } from '../../Components/Header';
import { Section } from '../../Components/Section';
import { Button } from '../../Components/Button';
import { Tag } from '../../Components/Tags';

export function Details() {
  return (
    <Container>
      <Header />
      <div className="menu">
        <h1>Meus Filmes</h1>
        <Button title="+ Adicionar filme" width="200px" />
      </div>

      <div className='cards'>
        <Section title="Interestelar">
          <p>
            Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade
            agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda
            com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está
            assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que
            o fantasma é uma inteligência desconhecida que está enviando mensagens codificadas
            através de radiação gravitacional, deixando coordenadas em binário que os levam até
            uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela
            que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem
            oferecer condições de sobrevivência para a espécie humana. As missões Lázaro enviadas
            anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro
            Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram.
            Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas;
            se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA,
            que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy.
            Além de Cooper, a tripulação da Endurance é formada pela bióloga Amelia, filha de Brand;
            o cientista Romilly, o físico planetário Doyle, além dos robôs TARS e CASE. Eles entram no
            buraco de minhoca e se dirigem a Miller, porém descobrem que o planeta possui enorme dilatação
            gravitacional temporal por estar tão perto de Gargântua: cada hora na superfície equivale a
            sete anos na Terra. Eles entram em Miller e descobrem que é inóspito já que é coberto por um
            oceano raso e agitado por ondas enormes. Uma onda atinge a tripulação enquanto Amelia tenta
            recuperar os dados de Miller, matando Doyle e atrasando a partida. Ao voltarem para a Endurance,
            Cooper e Amelia descobrem que 23 anos se passaram.
          </p>

          <div>
            <Tag title="Ficção científica" />
            <Tag title="Drama" />
            <Tag title="Família" />
          </div>
        </Section>

        <Section title="Harry Potter e a Pedra Filosofal">
          <p>
            Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys.
            Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa
            escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de
            ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts,
            que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara,
            vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger.
          </p>

          <div>
            <Tag title="Infantil" />
            <Tag title="Fantasia" />
          </div>
        </Section>

        <Section title="Velozes e Furiosos">
          <p>
          Brian O Conner é um policial que se infiltra no submundo dos rachas de rua 
          para investigar uma série de furtos. Enquanto tenta ganhar o respeito e a 
          confiança do líder Dom Toretto, ele corre o risco de ser desmascarado.
          </p>

          <div>
            <Tag title="Ação" />
            <Tag title="Crime" />
            <Tag title="Corrida" />
          </div>
        </Section>
      </div>
    </Container>
  );
}