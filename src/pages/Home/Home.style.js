import styled from'styled-components';

export const Container = styled.div`
  label {
    position: absolute;
    height: 16px;
    left: 341px;
    top: 167px;
    font-size: 18px;
    line-height: 16px;
    color: ${({ theme }) => theme.colors.secondary};
  }
  
  input {
    position: absolute;
    display: block;
    width: 630px;
    height: 54px;
    border-color: ${({ theme }) => theme.colors.secondary};
    outline: none;
    color: ${({ theme }) => theme.colors.mediumGray};
    left: -36px;
    border-radius: 8px;
    text-indent: 46px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.01em;
  }

  .card {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: absolute;
    width: 150px;
    height: 147.1px;
    margin-left: 305px;
    margin-top: 304px;
    border: 1.31068px solid;
    box-sizing: border-box;
    border-radius: 10.4854px;
  }

  .id {
    font-size: 10.4854px;
    line-height: 16px;
    margin-left: 110px;
    margin-top: 5px;
  }

  .name {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 31.49px;
    box-sizing: border-box;
    border-bottom-left-radius: 10.4854px;
    border-bottom-right-radius: 10.4854px;
  }

  .name span {
    font-size: 13.1068px;
    line-height: 21px;
  }

  .name span::first-letter {
    text-transform: uppercase;
  }

  .favoritos {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    height: 16px;
    left: 1032px;
    top: 198px;
  }

  .favoritos span {
    font-size: 14px;
    line-height: 16px;
    margin-left: 11.55px;
    color: ${({ theme }) => theme.colors.secondary};
    white-space: nowrap;
  }
`;