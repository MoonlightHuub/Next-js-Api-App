import { useRouter } from "next/router"
import fetch from "isomorphic-fetch"
import styles from '../../css/cards.module.css'
import Router from "next/router"

function User(props) {
    const router = useRouter()
    const {id} = router.query

  return (
    <div className={styles.container}>
        <div className={styles.home}>
            <h2 className={styles.homeLink} onClick={() => Router.push('/')}>
                Home
            </h2>
        </div>
        <div className={styles.card}>
            <div className={styles.headerCard}>
                <img src={props.user.avatar} alt={props.user.id} className={styles.image} />
            </div>
            <div>
                <h1 className={styles.name}>
                    {props.user.first_name + ' ' + props.user.last_name}
                </h1>
                <h3 className={styles.email}>
                  ✉  {props.user.email}
                </h3>
            </div>
        </div>
    </div>
  )
}

User.getInitialProps = async (ctx) => {
    const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`)
    const resJSON = await res.json()
    return{user: resJSON.data}
}

export default User