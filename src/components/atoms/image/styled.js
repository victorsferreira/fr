import styled from 'styled-components';

const StyledImage = styled.img`
  resize: none;  
  ${(props) => {
    if (props.thumb) return `
      max-width: 80px;
      max-height: 80px;
    `
  }}
`;

export default StyledImage;