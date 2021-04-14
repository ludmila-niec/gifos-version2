import styled from "styled-components";

export const GradientLine = styled.div`
  height: 8px;
  background: ${({ theme }) => theme.palette.colorGradient};
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.palette.colorText};
  font-size: 0.8rem;
  padding: 2rem;
`;
