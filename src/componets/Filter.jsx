import styled from "styled-components";

const FilterWrapper = styled.div`
  margin-bottom: 16px;
`;

const FilterInput = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
`;

export default function Filter({ value, onChange }) {
  return (
    <FilterWrapper>
      <FilterInput
        type="text"
        placeholder="Фільтр завдань"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </FilterWrapper>
  );
}