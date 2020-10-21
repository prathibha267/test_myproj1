import { Nav, Navbar } from 'react-bootstrap'
import Link from 'next/link'

function NavbarSection() {
    return (
        <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link href="/"><a className="nav-link text-white">Products</a></Link>
                    <Link href="/"><a className="nav-link text-white">Brands</a></Link>
                    <Link href="/"><a className="nav-link text-white">Deals</a></Link>
                    <Link href="/"><a className="nav-link text-white">Services</a></Link>
                </Nav>
                <Nav className="justify-content-end">
                    <Link href="/"><a className="nav-link text-white">Account</a></Link>
                    <Link href="/"><a className="nav-link text-white">Recently Viewed</a></Link>
                    <Link href="/order-status"><a className="nav-link text-white">Order Status</a></Link>
                    <Link href="/"><a className="nav-link text-white">Saved Items</a></Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarSection
