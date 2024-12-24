import styles from './news.module.css'

export interface News {
    id: number,
    author: string,
    title: string,
    description: string,
    imgSrc: string
}

interface NewsProps {
    news: News[];
}

export const News = (props: NewsProps) => {
    return (
        <div className={styles.main}>
            {props.news.map((news) => {
                return (
                    <div className={styles.news}>
                        <div className={styles.news_text}>
                            <p className={styles.author}>{news.author}</p>
                            <h1 className={styles.title}>{news.title}</h1>
                            <p className={styles.description}>{news.description}</p>
                        </div>
                        <img className={styles.image} src={news.imgSrc} alt="news image"/>
                    </div>
                )
            })}
        </div>
    );
};

