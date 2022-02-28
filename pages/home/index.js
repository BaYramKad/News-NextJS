import Link from 'next/link'
import MainLayout from '../../components/MainLayouts'

export default function HomePage() {
    return <MainLayout> 
    <h1>HomePage</h1>
    <button>
        <Link href='/news'><a>News</a></Link>
        </button>
    </MainLayout> 
}