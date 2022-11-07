import React from "react";
import styled from "styled-components";

export default function AuthCard({ children }) {
  return (
    <StyledAuthCard>
      <div className="card">{children}</div>
    </StyledAuthCard>
  );
}
const StyledAuthCard = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  display: grid;
  place-items: center;

  .card {
    padding: 14px 30px;
    width: max-content;
    min-width: 320px;
    min-height: 380px;
    border-radius: 16px;
    background-color: #fff;
    box-shadow: 0px 0px 9px 4px #adadada7;
  }

  @media (max-width: 380px) {
    .card {
      width: 90%;
      margin: 0 auto;
    }
  }
  @media (max-width: 348px) {
    .card {
      width: 80%;
      margin: 0 auto;
      padding: 14px 22px;
    }
  }
`;
