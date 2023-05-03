import styled from 'styled-components';

export const SearchHeader = styled.header`
  max-width: 210px;
`;
export const SearchForm = styled.form`
  max-width: 200px;
  display: flex;
  flex-wrap: wrap;
  position: fixed;
  z-index: 1200;
  background: transparent;
  padding-top: 30px;
  padding-bottom: 50px;

  height: 90px;

  border-radius: 50px;
  backdrop-filter: blur(10px);
  box-shadow: 20px 20px 40px -6px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: all 0.2s ease-in-out;

  left: 20px;
  top: 30px;
`;

export const SearchInput = styled.input`
  background: transparent;
  width: 165px;
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
  padding-top: 2px;
  padding-bottom: 2px;
  height: 50px;

  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
  }

  :active {
    background: rgba(255, 255, 255, 0.2);
  }

  :hover {
    margin: 4px;
  }
`;

export const SearchButton = styled.button`
  background: transparent;
  width: 165px;

  padding-bottom: 15px;
  padding-top: 15px;
  padding-left: 5px;
  padding-right: 5px;
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
  position: absolute;
  left: 20px;
  top: 107px;

  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
  }

  :focus {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
  }

  width: 150px;
  font-size: 18px;

  :hover {
    cursor: pointer;
  }

  :active {
    background: rgba(255, 255, 255, 0.2);
  }

  :hover {
    margin: 4px;
  }
`;
