import React from 'react';
import styled from 'styled-components';

const Button2 = () => {
  return (
    <StyledWrapper>
      <button className="button">
        <span className="label">Yuvanesh</span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    height: 40px;
    width: 140px;
    border: none;
    background: rgba(30, 20, 60, 0.6);
    border-radius: 20px;
    cursor: pointer;
    box-shadow: 0 0 8px rgba(255, 0, 90, 0.2);
    backdrop-filter: blur(4px);
    transition: all 0.3s ease;
  }

  .label {
    line-height: 20px;
    font-size: 16px;
    color: #e94ef4;
    font-family: 'Orbitron', sans-serif;
    letter-spacing: 1px;
    font-weight: 600;
  }

  .button:hover {
    background: rgba(255, 0, 90, 0.15);
    box-shadow: 0 0 15px rgba(255, 0, 90, 0.6);
  }
`;

export default Button2;
