import Link from 'next/link'
import MainLayout from '../components/MainLayouts'
export default function Index () {
    return (<MainLayout>
        <h1>Hello Next.js</h1>
                <button>
                <Link href='/news'><a>News</a></Link>
                </button>
                <button>
                <Link href='/home'><a>Go back to home</a></Link>
                </button>
        </MainLayout>
    )
}