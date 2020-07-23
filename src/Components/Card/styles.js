import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    width: 215px;
    opacity: 0.8;
    filter: grayscale(100%);
    transition: 0.3s;
    border-radius: 8px;
    margin-bottom: 10px;

    &:hover {
      opacity: 1;
      filter: grayscale(0%);
    }
  }

  p,
  a {
    font-family: 'Taviraj', serif;
    font-weight: 300;
    color: #5d6063;
    font-size: 1rem;
    line-height: 1.1rem;
    line-height: 1.6rem;
    margin: 0;
  }

  a {
    color: #5995da;
  }
`;
