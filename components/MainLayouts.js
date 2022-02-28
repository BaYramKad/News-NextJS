import Link from 'next/link'

export default function MainLayout({children}) {
    return <>
        <nav>
            <ul>
                <li> <Link href='/home'><a>Главная</a></Link>  </li>
                <li> <Link href='/news'><a>Новости</a></Link>  </li>
                <li> <Link href='/profile'><a>Профиль</a></Link>  </li>
            </ul>
        </nav>
        <main>
        {children}
        </main>

        <style jsx>{`
            nav {
                position: fixed;
                height: 60px;
                left: 0;
                top: 0;
                right: 0;
                background: darkblue;
                
            }
            nav ul {
                list-style: none;
                display: flex;
                justify-content: space-around;
                align-items: center;
            }
            nav a {
                color: #fff;
                text-decoration: none
            } 
            main {
                margin-top: 80px;

            }       
            `}
        </style>
    </>
}