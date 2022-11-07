import React from "react";
import styled, { css } from "styled-components";

export default function Button({ type, btnValue, bgColor, color, width, onClick, btnDis }) {
  return (
    <StyledButton bgColor={bgColor} color={color} width={width} className="small">
      <button className={"button " + btnDis} type={type} onClick={onClick} >
        {btnValue}
      </button>
    </StyledButton>
  );
}

const StyledButton = styled.div`
  .button {
    width: 100%;
    padding: 8px 10px;
    border: none;
    ${({ bgColor, color }) => {
      return css`
        background-color: ${bgColor};
        color: ${color};
      `;
    }}
    font-weight: 500;
    border-radius: 6px;
    transition: 0.3s;

    &:hover {
      transform: scale(101%);
    }

    &:active {
      transform: translateY(3px);
    }

    ${({ width }) => {
      if (width) {
        return css`
          width: ${width};
        `;
      }
    }}
  }
`;
