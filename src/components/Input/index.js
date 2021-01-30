import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputBase = styled.input`
  min-height: 40px;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.mainBg};
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  margin-bottom: 25px;
  padding:10px;
  outline: none;
  font-size: 14px;


  &::-webkit-input-placeholder {
   color: ${({ theme }) => theme.colors.contrastText};
  }
`;

export default function Input({ onChange, value, placeholder }) {
  return (
    <div>
      <InputBase placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
}

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
};
