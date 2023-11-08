import { useState } from 'react'
import Nav from './Nav.jsx'
import Products from './Products.jsx'
import ProductsDetail from './ProductsDetail.jsx'

function Compiler() {
    // the **main** page has a "read more" button that will go into **details**.
    // the **details** page has a "back" button that will go into **main**.
    const [showDetails, setShowDetails] = useState(0);
    const [showMain, setShowMain] = useState(true);
    function readMoreOnClick(productId) {
        return () => {
            setShowMain(false);
            setShowDetails(productId);
        }
    }
    function backOnClick() {
        setShowDetails(0);
        setShowMain(true);
    }
    return (
        <>
            <Nav />
            { showMain && (<Products readMoreOnClick={readMoreOnClick} />) }
            { showDetails && (<ProductsDetail backOnClick={backOnClick} productId={showDetails}/>) }
        </>
    )
}

export default Compiler;