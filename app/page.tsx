// import { Inter } from '@next/font/google'
// import styles from './page.module.css'
import Dashboard from './components/Dashboard/Dashboard'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex flex-col mt-6 m-auto sm:mt-6 sm:m-auto md:mt-6 md:m-auto lg:mt-6 lg:m-auto xl:mt-2 xl:mr-6 2xl:mt-2 2xl:mr-6 w-5/6 h-full 2xl:h-screen sm:border-slate-400 border-0 sm:border-2 rounded-lg drop-shadow-lg sm:shadow-sm shadow-slate-500 p-10">
      <Dashboard />
    </div>
  )
}
