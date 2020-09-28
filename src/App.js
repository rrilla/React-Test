import React from 'react';
import styled from 'styled-components';
import './App.css';

function App() {
  const MyBox = styled.div`
    display: grid;
    color: red;
  `;

  return (
    <MyBox>
      <div>Hello jh</div>;
    </MyBox>
  );
}

export default App;
