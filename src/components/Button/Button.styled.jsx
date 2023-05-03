import styled from 'styled-components';

export const ButtonLoadMore = styled.button`
  background: transparent;
  max-width: 100px;
  padding: 1em;
  margin-bottom: 2em;
  border: none;
  border-left: 1px solid $white;
  border-top: 1px solid $white;
  border-radius: 5000px;
  backdrop-filter: blur(5px);
  box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  position: fixed;
    left: 15px;
    top: 600px;

  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
  }

  &[type='email'],
  &[type='password'] {
    :focus {
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
    }
  }

  &[type='button'] {
    margin-top: 10px;
    width: 150px;
    font-size: 1rem;

    &:hover {
      cursor: pointer;
    }

    &:active {
      background: rgba(255, 255, 255, 0.2);
    }
  }

  &:hover {
    margin: 4px;
  }
`;
