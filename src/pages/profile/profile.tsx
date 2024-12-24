import styles from './profile.module.css'

interface ProfileProps {
    imgSrc: string,
    name: string,
    description: string
}

export const Profile = (props: ProfileProps) => {
    return (
        <div className={styles.main}>
            <img src={props.imgSrc} alt="Avatar" className={styles.avatar}/>
            <div className={styles.profile_info}>
                <h1 className={styles.name}>{props.name}</h1>
                <p className={styles.description}>{props.description}</p>
            </div>
        </div>
    )
}
