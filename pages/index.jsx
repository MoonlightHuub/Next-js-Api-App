import Container from "../components/container"
import Head from "next/head"
import styles from '../css/index.module.css'
import fetch from "isomorphic-fetch"
import Users from "../components/users"

function Index(props){
    console.log(props)
    return(
        <main className={styles.mainpage}>
            <Head>
                <title>Home</title>
            </Head>
            <Container>
                <h1 className={styles.titles}>
                    Index
                </h1>
                <Users users={props.users}/>
            </Container>
        </main>
    )
}

Index.getInitialProps = async(ctx) => {
    const res = await fetch('https://reqres.in/api/users')
    const resJSON = await res.json()
    return{users: resJSON.data}
}

export default Index