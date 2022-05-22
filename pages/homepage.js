// import styles from '../styles/Home.module.css'
import HomeMint from './components/HomePage/HomeMint'
import HomeIntro from './components/HomePage/HomeIntro'
import Footer from './components/Footer'
import HomeJoin from './components/HomePage/HomeJoin'
import HomeNavbar from './components/HomePage/HomeNavbar'
import { Container } from 'react-bootstrap'

export default function homeIntro() {
    return(
        <Container>
            <HomeNavbar />
            <HomeIntro />
            <HomeMint />
            <HomeJoin />
            <Footer />
        </Container>
    )
}