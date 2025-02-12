import PropTypes from 'prop-types';
import { Container } from './styles';

export function Section({ title, children }) {
  return (
    <Container >
      <h1>{ title }</h1>
      { children }
    </Container>
  );
}

Section.propTypes = {
    title: PropTypes.string,  // title deve ser uma string
    children: PropTypes.node.isRequired, // children pode ser qualquer nó React e é obrigatório
};