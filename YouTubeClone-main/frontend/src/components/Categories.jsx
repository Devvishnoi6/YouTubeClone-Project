import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  overflow-x: auto;
  background-color: ${({ theme }) => theme.bgLighter};
  padding: 10px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  white-space: nowrap;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

const Category = styled.div`
  padding: 5px 15px;
  margin-right: 10px;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const categories = [
  "All",
  "Gaming",
  "History",
  "Live",
  "Thrillers",
  "New for You",
  "Watched"
];

const Categories = () => {
  return (
    <Container>
      {categories.map((category) => (
        <Category key={category}>{category}</Category>
      ))}
    </Container>
  );
};

export default Categories;
