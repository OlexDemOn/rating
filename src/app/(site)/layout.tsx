import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import styles from './layout.module.scss';
import Sidebar from '@/app/(site)/components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Footer from './components/Footer/footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Top-app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

    return (
        <html lang="en">
            <body className={inter.className}>
                <div className={styles.wrapper}>
                    <Header className={styles.header} />
                    <Sidebar className={styles.sidebar} />
                    <div className={styles.body}>
                        {children}
                    </div>

                    <Footer className={styles.footer} />
                </div>
            </body>
        </html>
    )
}
