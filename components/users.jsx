import styles from "../css/users.module.css";
import Link from "next/link";
import Router from "next/router";

function Users(props) {
  return (
    <div>
      <div>
        {props.users.map((user, i) => (
          <div className={styles.container} key={i}>
            <ul>
              <li className={styles.card} onClick={() => Router.push('/users/[id]', `/users/${user.id}`)}>
                <div>
                    <h2 className={styles.title}>Full Name: </h2>
                    <p className={styles.name}>
                    {user.first_name + " " + user.last_name}
                    </p>
                    <h2 className={styles.title}>Email: </h2>
                    <p className={styles.name}>{user.email}</p>
                </div>
                <div className={styles.imgContainer}>
                    <img src={user.avatar} alt={user.first_name + ' ' + user.last_name} className={styles.img} />
                </div>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
