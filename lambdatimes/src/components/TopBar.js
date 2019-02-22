import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const TBContainerDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`;

const TBContLT = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const TBContCTR = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const TBContRT = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

const Span = styled.span`
  cursor: pointer;
`;

const TBspanLT = styled(Span)`
  margin-right: 25%;
  font-weight: bold;
`;

const TBspanCTR = styled(Span)`
  margin-right: 5%;
  &:hover {
    text-decoration: underline;
  }
`;

const TBspanLastChild = styled(TBspanCTR)`
  margin-right: 0;
`;

const TopBar = () => {
  return (
    <TopBarWrapper>
      <TBContainerDiv>
        <TBContLT>
          <TBspanLT>TOPICS</TBspanLT><TBspanLT>SEARCH</TBspanLT>
        </TBContLT>
        <TBContCTR>
          <TBspanCTR>GENERAL</TBspanCTR><TBspanCTR>BROWNBAG</TBspanCTR><TBspanCTR>RANDOM</TBspanCTR><TBspanCTR>MUSIC</TBspanCTR><TBspanLastChild>ANNOUNCEMENTS</TBspanLastChild>
        </TBContCTR>
        <TBContRT>
          <Span>LOG IN</Span>
        </TBContRT>
      </TBContainerDiv>
    </TopBarWrapper>
  )
}

export default TopBar;