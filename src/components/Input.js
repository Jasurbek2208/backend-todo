import React from "react";
import styled from "styled-components";

export default function Input({ type, label, value, placeholder, onChange }) {
  return (
    <StyledInput>
      {label ? <label className="mb-1">{label}</label> : null}
      <input
        className="input"
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </StyledInput>
  );
}

const StyledInput = styled.div`
  .input {
    width: 100%;
    padding: 8px 13px;
    outline: none;
    border: 1px solid #015cb3;
    border-radius: 6px;
    transition: 0.3s;

    &:focus {
      outline: 1px solid blue;
    }
  }
`;
