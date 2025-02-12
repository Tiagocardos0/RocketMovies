import PropTypes from 'prop-types';
import { Button as StyledButton  } from './styles';

export function Button({ title, width }) {
  return (
    <StyledButton  type='button' width={width}>
      { title }
    </StyledButton>
  );
}

// Adicionando validação de props
Button.propTypes = {
  title: PropTypes.string.isRequired, // Garante que 'title' seja uma string e obrigatória
  width: PropTypes.string, // Permite que 'width' seja uma string (opcional)
};

Button.defaultProps = {
  width: '100%',
};