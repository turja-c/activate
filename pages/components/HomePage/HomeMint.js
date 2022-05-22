import styles from '../../../styles/Home.module.css'
import { Box, SimpleGrid } from '@chakra-ui/react'
import Router from "next/router";
import { Container } from 'react-bootstrap';
import Image from 'next/image';
// import MyAlgoConnect from '@randlabs/myalgo-connect';

// const myAlgoConnect = new MyAlgoConnect({ disableLedgerNano: false });

// const settings = {
//     shouldSelectOneAccount: false,
//     openManager: false
// };

// const accounts = await myAlgoConnect.connect(settings);

export default function HomeMint() {
    return(
        <div style={{paddingTop: '10rem'}}>
            
            <Container>
            <h1 className={styles.subsectiontitle}>Mint your NFT</h1>
            <p className={styles.subsectionsubtitle}>this week’s most popular featured products. </p>
            </Container>
            <SimpleGrid columns={3} spacingX='40px' spacingY='40px' style={{paddingRight: '10rem', paddingLeft: '10rem'}} >
                
                <Box maxW='md' borderWidth='1px' borderRadius='1rem' overflow='hidden' className={styles.card01} onClick={() => Router.push("/product/metamask", `/product/metamask`)}>
                     <Image src={require('/public/images/near.png')}  />
                    <h1 style={{color: 'black', alignContent:'center', marginTop: '1rem'}}>NEAR</h1>  
                </Box>
                
                <Box maxW='sm' borderWidth='1px' borderRadius='1rem' overflow='hidden' className={styles.card02} onClick={() => Router.push("/product/opensea", `/product/opensea`)}>
                    <Image src={require('/public/images/sol.png')}  />
                    <h1 style={{color: 'black', alignContent:'center', marginTop: '1rem'}}>Solana</h1>
                </Box>
                <Box maxW='sm' borderWidth='1px' borderRadius='1rem' overflow='hidden' className={styles.card03} onClick={() => Router.push("/product/alchemy", `/product/alchemy`)}>
                    <Image src={require('/public/images/algo.png')}  />
                    <h2 style={{color: 'black', alignContent:'center', marginTop: '2rem'}}>Algorand</h2>
                    {/* <AlcButton onClick={()=>accounts()} >SIGN IN</AlcButton>  */}

                </Box>
                
            </SimpleGrid>
        </div>
    )
}