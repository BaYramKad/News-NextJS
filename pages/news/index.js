import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import Link from 'next/link'

import MainLayout from '../../components/MainLayouts'

export default function NewsPage({news: serverNews}) {
    const backToMainPage = () => {
        Router.push('/')
    }

    const [news, setNews] = React.useState(serverNews)

    React.useEffect(() => {
        const load = async () => {
            const response = await fetch('http://localhost:4200/news');
            const data = await response.json()
            setNews(data)
        }

        if(!serverNews) {
            load()
        }
    }, [])


    if(!news) {
        return <MainLayout>
            <h1>Loading All News...</h1>
        </MainLayout>
    }

    return <MainLayout>
        <Head>
            <title>News Page | Learn Next.js</title>
        </Head>
        
        <h1>News Page</h1>
        <ul>
            {news.map(item => {
                return <li key={item.id}><Link href={`/news/[id]`} as={`/news/${item.id}`}><a>{item.title}</a></Link></li>
            })}
        </ul>
        <button onClick={ backToMainPage }>Go back to Next</button>
    </MainLayout> 
}

NewsPage.getInitialProps = async ({req}) => {
    if(!req) {
        return {
            news: null
        }
    }
    const response = await fetch('http://localhost:4200/news'); // Обращение и загрузка дынных идет уже на сервере
    const news = await response.json();
    
    return {
        news
    }
}