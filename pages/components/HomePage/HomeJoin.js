import styles from '../../../styles/Home.module.css'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'

export default function HomeJoin() {
    return(
        <div className={styles.container} style={{padding: '15rem '}}>
            <h1 className={styles.title}>Join our Community</h1>
            <p className={styles.description}> share your product with the world and tell us why it’s amazing. </p>
            <Center>
                <Button style={{padding: '1.5rem', fontSize: '1rem', borderRadius: ' 2rem'}} colorScheme='blue'>share product</Button>
            </Center>
        </div>
    )
}