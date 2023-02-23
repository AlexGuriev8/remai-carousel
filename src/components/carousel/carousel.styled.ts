import styled from "styled-components";

import rightQt from "../../assets/right-qt.png";
import leftQt from "../../assets/left-qt.png";

const StyledCarousel = styled.div`
  position: relative;
  color: #000000;
  font-family: "Public Sans", Sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 35px;

  .image {
    position: absolute;
    top: -45px;
    left: 25px;
    width: 87px;
    height: 87px;
    border-radius: 10%;
  }

  .content {
    background-color: #f2eef7;
    padding: 60px 50px 20px;
    position: relative;

    .line {
      height: 1px;
      width: 30px;
      margin-top: 15px;
      background-color: #ce2041;
    }

    .flex {
      display: flex;
      align-items: center;
    }

    &-name {
      font-size: 18px;
      font-weight: 500;
      line-height: 40px;
      color: #ce2041;
    }

    &-occupation {
      color: #ce204190;
      font-size: 12.5px;
      font-weight: 400;
      font-family: inherit;
    }

    &::before {
      content: url(${leftQt});
      position: absolute;
      left: 12px;
      width: 0;
      height: 0;
    }

    &::after {
      content: url(${rightQt});
      position: absolute;
      right: 30px;
      width: 0;
      height: 0;
      top: 70%;
    }
  }

  .left {
    position: absolute;
    top: 40%;
    left: -25px;
    transform: translateY(-50%);
    cursor: pointer;
  }

  .right {
    position: absolute;
    top: 40%;
    right: -25px;
    transform: translateY(-50%);
    cursor: pointer;
  }

  cite {
    display: flex;
    flex-direction: column;
    font-style: normal;
    font-size: 14px;
    line-height: 1.5;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  .carousel {
    max-width: 900px;
    margin: 20px;
  }
`;

export { Container, StyledCarousel };
