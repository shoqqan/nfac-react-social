import './App.css'
import styles from './App.module.css'
import {Header} from "./components/header/header.tsx";
import {useState} from "react";
import {News} from "./pages/news/news.tsx";
import {Profile} from "./pages/profile/profile.tsx";

function App() {

    const [route, setRoute] = useState('profile')
    const [user, setUser] = useState(
        {
            name: 'Joey Flin',
            description: 'Software Engineer',
            imgSrc: '/avatar.png'
        }
    )


    const [news, setNews] = useState<News[]>([
        {
            id: 1,
            author: 'Joey Flin',
            title: 'React Social Web Opened',
            description: 'React Social Web is a social media platform for developers',
            imgSrc: '/news.jpg'
        },
        {
            id: 2,
            author: 'Nurzhan Sultanov',
            title: 'React Social Web Launched',
            description: 'React Social Web is a social media platform for developers',
            imgSrc: '/news.jpg'
        },
        {
            id: 3,
            author: 'Alice Johnson',
            title: 'New Features Added',
            description: 'React Social Web now supports new features for better user experience',
            imgSrc: '/news.jpg'
        },
        {
            id: 4,
            author: 'Bob Smith',
            title: 'Community Growing',
            description: 'The community of React Social Web is growing rapidly',
            imgSrc: '/news.jpg'
        }
    ])


    return (
        <article className={styles.main}>
            <Header/>
            <button onClick={() => {
                setRoute('profile')
            }}>
                profile
            </button>
            <button onClick={() => {
                setRoute('news')
            }}>
                news
            </button>
            {route === 'profile' && (
                <Profile name={user.name} description={user.description} imgSrc={user.imgSrc}/>
            )}
            {route === 'news' && (
                <News news={news}/>
            )}
        </article>
    )
}

export default App
