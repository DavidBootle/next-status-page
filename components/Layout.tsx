import type { NextPage } from "next"
import Head from 'next/head'
import Image from "next/image"
import Link from 'next/link'
import Script from "next/script"

interface Props {
    activeMenuItem: string,
}

const Layout: NextPage<Props> = (props) => {

    return (
        <>
            <Head>
                { /* required meta tags */ }
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            </Head>
            <body>
                <div className="app">
                    { /* header */ }
                    <header className="app-header app-header-dark">
                        <div className="top-bar">
                            
                            { /* brand for large screens */ }
                            <div className="top-bar-brand">
                                <Link href="/">Bootle Status Page</Link>
                            </div>
                            { /* brand for large screens */ }

                            { /* nav bar items */ }
                            <div className="top-bar-list">

                                { /* menu toggle for small screens */ }
                                <div className="top-bar-item px-2 d-md-none d-lg-none d-xl-none">
                                    <button className="hamburger hamburger-squeeze" type="button" data-toggle="aside" aria-label="toggle menu"><span className="hamburger-box"><span className="hamburger-inner"></span></span></button>
                                </div>
                                { /* menu toggle for small screens */ }

                                { /* navigation items */ }
                                <div className="top-bar-item top-bar-item-right px-0 d-none d-sm-flex">
                                    <ul className="header-nav nav">

                                        { /* login button */ }
                                        <li className="nav-item">
                                            <Link href="/login"><a className="nav-link">Login</a></Link>
                                        </li>
                                        { /* login button */ }

                                    </ul>
                                </div>
                                { /* navigation items */ }
                            </div>
                            { /* nav bar items */ }
                        </div>
                    </header>
                    { /* header */ }

                    { /* aside */ }
                    <aside className="app-aside app-aside-expand-md app-aside-light">
                        <div className="aside-content">
                            { /* aside menu */ }
                            <div className="aside-menu overflow-hidden">
                                <nav id="stacked-menu" className="stacked-menu">
                                    <ul className="menu">
                                        { /* Overview menu item */ }
                                        <li className={`menu-item ${ (props.activeMenuItem == 'overview') ? 'has-active' : '' }`}>
                                            <Link href="/"><a className="menu-link"><span className="menu-icon fas fa-home"></span><span className="menu-text">Overview</span></a></Link>
                                        </li>
                                        { /* Overview menu item */ }

                                        { /* api.bootle.tech menu item */ }
                                        <li className={`menu-item ${ (props.activeMenuItem == 'api.bootle.tech') ? 'has-active' : '' }`}>
                                            <Link href="/api.bootle.tech"><a className="menu-link"><span className="menu-icon fas fa-server"></span><span className="menu-text">api.bootle.tech</span></a></Link>
                                        </li>
                                        { /* api.bootle.tech menu item */ }

                                        { /* bootle.tech menu item */ }
                                        <li className={`menu-item ${ (props.activeMenuItem == 'bootle.tech') ? 'has-active' : '' }`}>
                                            <Link href="/bootle.tech"><a className="menu-link"><span className="menu-icon fa" style={{top: '3px', position: 'relative'}}><Image src="/assets/images/Bootle Tech Logo.png" alt="Bootle Tech logo menu icon" height={18} width={18} /></span><span className="menu-text">bootle.tech</span></a></Link>
                                        </li>
                                        { /* bootle.tech menu item */ }

                                        { /* bootletools.com menu item */ }
                                        <li className={`menu-item ${ (props.activeMenuItem == 'bootletools.com') ? 'has-active' : '' }`}>
                                            <Link href="/bootletools.com"><a className="menu-link"><span className="menu-icon fas fa-globe"></span><span className="menu-text">bootletools.com</span></a></Link>
                                        </li>
                                        { /* bootletools.com menu item */ }

                                        { /* planner.bootletools.com menu item */ }
                                        <li className={`menu-item ${ (props.activeMenuItem == 'planner.bootletools.com') ? 'has-active' : '' }`}>
                                            <Link href="/planner.bootletools.com"><a className="menu-link"><span className="menu-icon fa" style={{top: '3px', position: 'relative'}}><Image src="/assets/images/visual schedule planner icon.png" alt="visual schedule planner icon" height={18} width={18} /></span><span className="menu-text">planner.bootletools.com</span></a></Link>
                                        </li>
                                        { /* planner.bootletools.com menu item */ }

                                        { /* timecalc.bootletools.com menu item */ }
                                        <li className={`menu-item ${ (props.activeMenuItem == 'timecalc.bootletools.com') ? 'has-active' : '' }`}>
                                            <Link href="/timecalc.bootletools.com"><a className="menu-link"><span className="menu-icon fa" style={{top: '3px', position: 'relative'}}><Image src="/assets/images/time calculator icon.png" alt="time calculator icon" height={18} width={18} /></span><span className="menu-text">timecalc.bootletools.com</span></a></Link>
                                        </li>
                                        { /* timecalc.bootletools.com menu item */ }

                                        { /* ytdownloader.bootletools.com menu item */ }
                                        <li className={`menu-item ${ (props.activeMenuItem == 'ytdownloader.bootletools.com') ? 'has-active' : '' }`}>
                                            <Link href="/ytdownloader.bootletools.com"><a className="menu-link"><span className="menu-icon fas fa-globe"></span><span className="menu-text">ytdownloader.bootletools.com</span></a></Link>
                                        </li>
                                        { /* ytdownloader.bootletools.com menu item */ }

                                    </ul>
                                </nav>
                            </div>
                            { /* aside menu */ }
                        </div>
                    </aside>
                    { /* aside */ }
                </div>
            </body>

            { /* plugin scripts */ }
            <Script src="/assets/vendor/stacked-menu/js/stacked-menu.min.js"/>
            <Script src="/assets/vendor/perfect-scrollbar/perfect-scrollbar.min.js"/>
        </>
    )
}

export default Layout