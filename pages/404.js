import Link from 'next/link'
import s from  '../styles/error.module.css'
export default function ErrorPage() {
  return (
    <>
    <h1 className={s.error}>Error 404</h1>
    <div> Go <Link href='/home'><a>back to</a></Link> HomePage </div>
    </>
  )
}