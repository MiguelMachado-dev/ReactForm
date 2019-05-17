import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  span {
    margin-top: 10px;
    span {
      margin-left: 23px;
      position: relative;
      display: inline-block;
      background-color: yellow;
      transform: scale(1.5) rotate(-2deg) skew(-20deg);
      transition: all 0.2s ease-in-out;
      & > * {
        display: inherit;
        transform: scale(0.7) rotate(2deg) skew(20deg);
      }
      a {
        margin-left: 5px;
        margin-right: 5px;
        padding: 5px 10px;
        color: #000;
        width: 100%;
        transition: all 0.2s ease-in-out;
      }

      &:hover {
        background-color: red;
        transform: scale(2) rotate(-2deg) skew(-20deg);
        a {
          color: #fff;
        }
      }
    }
  }
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: 300px;
  padding: 30px 20px;
  background: #ffe;
  border-radius: 4px;
  h1 {
    font-size: 24px;
    text-align: center;
    margin: 0px;
  }

  a {
    color: #3463ae;
    text-align: center;
    margin-top: 30px;
  }
  form {
    margin: 20px 0 0;
    p {
      display: ${props => (props.withError ? "flex" : "none")};
      justify-content: center;
      margin-top: -10px;
      margin-bottom: 10px;
    }
    section {
      margin: 0 0 10px;
      &:last-of-type {
        margin: 0 0 20px;
      }
      input {
        height: 36px;
        font-size: 14px;
        color: rgb(48, 43, 62);
        width: 100%;
        border-radius: 4px;
        border-image: initial;
        background: rgb(255, 255, 255);
        padding: 0px 12px;
        border: ${props =>
          props.withError ? "1px solid #F00" : "1px solid #ccc"};
      }

      span {
        font-size: 12px;
        color: #ff6c6c;
      }
    }
    button {
      display: flex;
      align-items: center;
      align-self: stretch;
      justify-content: center;
      cursor: pointer;
      font-size: 16px;
      font-weight: 500;
      width: 100%;
      height: 46px;
      border-radius: 4px;
      border: 0;
      transition: all 0.2s ease 0s;
      padding: 0 25px;
      background: #f60;
      color: #fff;
      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
