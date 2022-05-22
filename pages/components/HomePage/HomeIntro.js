import styles from '../../../styles/Home.module.css'
import Image from 'next/image'

export default function HomeIntro() {
    return(
        <div className={styles.galleryContainer}>
        {/* <div className={styles.bgImage}> </div> */}
        {/* <Image src={require('/public/images/crystal.png')} 
                    // alt="metamask" 
                    // maxWidth={800} 
                    style={{ overflow: 'scroll', 
                            width: '90rem', 
                            height: '20rem', 
                            position: 'absolute',
                            marginBottom:'19rem'}}/> */}
            <h1 className={styles.title}>Fresh Codes. Fresher Cuts.  </h1>
            <p className={styles.description}>Revolutionize builders & developers in the Web 3 ecosystem.</p>
        </div>
    )
}