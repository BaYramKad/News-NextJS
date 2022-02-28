import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import MainLayout from '../../components/MainLayouts'
export default function Profile() {
    const backToMainPage = () => {
        Router.push('/')
    }
    return <MainLayout>
            <Head>
                <title>Profile Page | Learn Next.js</title>
            </Head>
            
            <h1>Profile Page</h1>
            <button onClick={ backToMainPage }>Go back to Next</button>
    </MainLayout> 
}