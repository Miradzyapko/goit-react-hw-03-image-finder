import styled from 'styled-components';
export const ListItem = styled.li`

color: blue;
  margin-bottom: 5px;
  font-size:16px;
  align-items: center;
  justify-content: center;
`;
export const Img = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;