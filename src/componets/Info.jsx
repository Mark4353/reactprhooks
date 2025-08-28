import styled from "styled-components";

const InfoWrapper = styled.div`
  margin-bottom: 16px;
  font-size: 18px;
  background: #e3f2fd;
  border-radius: 6px;
  padding: 12px 18px;
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(33, 150, 243, 0.08);
`;

const InfoItem = styled.div`
  font-weight: 500;
  color: #1976d2;
`;

export default function Info({ total, completed }) {
  return (
    <InfoWrapper>
      <InfoItem>Всього завдань: {total}</InfoItem>
      <InfoItem>Виконано: {completed}</InfoItem>
    </InfoWrapper>
  );
}