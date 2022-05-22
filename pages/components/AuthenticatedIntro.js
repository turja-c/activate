import React, { useState, useEffect } from 'react';
import { StyledCard, Title1, Title2, Title3, SubTitleTwo, AlcButton } from './Styles';
// import '../flow/config';
// import * as fcl from "@onflow/fcl";
import { useWeb3 } from "@3rdweb/hooks" 


function AuthenticatedIntro() {
    // const [user, setUser] = useState({loggedIn: null})
    // useEffect(() => fcl.currentUser.subscribe(setUser), [])
    const { connectWallet, address, error } = useWeb3();

  return( 
  <StyledCard>
      <div style={{marginTop: '-10rem'}}>
            <Title1>Turja Chowdhury </Title1> 
            <Title2> X </Title2>
            <Title3> Nervos Network</Title3>
      </div>
      <SubTitleTwo>
        Hi {address ?? "No Address"}! 👋🏽
      </SubTitleTwo>
      <SubTitleTwo>
      I&apos;m excited to sharecase my interest towards Web3 and Nervos.  Here is my story!
      </SubTitleTwo>
      <div style={{marginBottom: '-2rem'}}>
        <a href="https://twitter.com/tchowd_">
          <AlcButton >Twitter</AlcButton>
        </a>
        <a href="http://tchowd.com">
          <AlcButton >Website</AlcButton>
        </a>
        <a href="http://github.com/turja-c">
          <AlcButton >Github</AlcButton>
        </a>
      </div>
  </StyledCard>
  );
}

export default AuthenticatedIntro;
