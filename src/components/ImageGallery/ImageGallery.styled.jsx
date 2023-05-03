import styled from 'styled-components';

export const GalleryList = styled.ul`
  background: linear-gradient(
    90deg,
    rgba(214, 56, 204, 1) 40%,
    rgba(81, 99, 189, 1) 67%
  );
  padding-top: 25px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
  justify-content: center;
  margin: 0;
`;

export const BtnBackground = styled.div`
  background: linear-gradient(
    90deg,
    rgba(214, 56, 204, 1) 40%,
    rgba(81, 99, 189, 1) 67%
  );
`;

export const Text = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 64px;
  background: #f5ff96;
  background: linear-gradient(to right, #f5ff96 42%, #a3ffbc 68%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 1px 1px 4px rgba(255, 255, 255, 0.68);
`;

export const Oops = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 64px;
  background: #f5ff96;
  background: linear-gradient(to right, #f5ff96 42%, #a3ffbc 68%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 1px 1px 4px rgba(255, 255, 255, 0.68);
`;
