import React from 'react';
import styled from 'styled-components';

const Header = () => {
  const NavS = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
  `;

  const Section1S = styled.div``;

  return (
    <div>
      <NavS>
        <div>로고</div>
        <div>메뉴</div>
      </NavS>
      <Section1S>첫번째 섹션 영역</Section1S>
    </div>
  );
};

export default Header;
