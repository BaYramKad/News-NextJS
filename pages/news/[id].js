import React from 'react'

import Router, {useRouter} from 'next/router'
import MainLayout from '../../components/MainLayouts'

export default function News({news: serverNews}) {
    
    const {query} = useRouter() // получение id urla
    const backToAllNews = () => {
        Router.push('/news')
    }
    const [news, setNews] = React.useState(serverNews)

    React.useEffect(() => {
        const load = async () => {
            const response = await fetch(`http://localhost:4200/news/${query.id}`);
            const data = await response.json()
            setNews(data)
        }

        if(!serverNews) {
            load()
        }
    }, [])
    
    if(!news) {
        return <MainLayout>
            <h1>Loading ...</h1>
        </MainLayout>
    }

    return <MainLayout>
        <h1>{news.title}</h1>
        <hr/>
        <p>{news.body}</p>

        <button onClick={ backToAllNews }>Go back to all news</button>
    </MainLayout>
}

News.getInitialProps = async ({query, req}) => {
    if(!req) {
        return {
            news: null
        }
    }
    const response = await fetch(`http://localhost:4200/news/${query.id}`); // Динамическая маршрутизация
    const news = await response.json();

    
    return {
        news
    }
}