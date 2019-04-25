

import React, { Children }  from 'react';
import styled from 'styles/styled-components';
import Header from 'components/Header';
import Footer from 'components/Footer';

const ContainerBodyWrapper = styled.div``;
const MainContainer = styled.div``;
const RowContainer = styled.div``;

function BaseLayout(props: any) {
  return <ContainerBodyWrapper className="body">
    <MainContainer className="main_container container-fluid">
      <RowContainer className="row">
        <Header />
          {Children.toArray(props.children)}
        <Footer />
      </RowContainer>
    </MainContainer>
  </ContainerBodyWrapper>;
}

export default BaseLayout;
