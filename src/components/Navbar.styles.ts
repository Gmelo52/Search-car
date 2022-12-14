import styled from "styled-components";
import { theme } from '../styles/Global.styles'

export const Container = styled.div`
  background-image: linear-gradient(
    ${theme.colors.black}, ${theme.colors.lightGray}
    );
  color: ${theme.colors.white};
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > h1 {
    font-size: 26px;
    font-weight: 500;
    cursor: pointer;
    :hover{
      color: ${theme.colors.hoverGray};
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
  > li {
    font-size: 15px;
    font-weight: 400;
    cursor: pointer;
    :hover{
      color: ${theme.colors.hoverGray};
    }
  }
`;

export const ContactWrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 5px;
  font-size: 15px;
  font-weight: 400;
`;

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  > svg {
    width: 22px;
    height: 22px;
    cursor: pointer;
    :hover{
      color: ${theme.colors.hoverGray};
    }
  }
`;
