import Head from 'next/head'
import NavbarSection from './NavbarSection'

function Layout({ children }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>My Shop</title>
                <link rel="stylesheet" href="/css/styles.css" />
            </Head>
            <NavbarSection />
            {children}
        </>
    )
}

export default Layout
