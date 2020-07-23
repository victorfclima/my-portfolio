import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 100px;

  p{
  font-family: 'Taviraj', serif;
  font-style: italic;
  font-size: 1rem;
  line-height: 1.7rem;
  letter-spacing: 0.05em;
  color: #5d6063;
  }
`

export const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 500;
  line-height: 3.3rem;
  color: #5d6063;

  span{
    font-size: 2.25rem;
  font-weight: 500;
  line-height: 3.3rem;
  color: #5995da;
  }
`
