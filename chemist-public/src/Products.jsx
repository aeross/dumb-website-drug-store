import { useState } from 'react'

// to show a certain button for pagination, e.g. <button className="join-item btn btn-sm">3</button>
function ButtonForEachPage({ page, active, paginationOnClick }) {
    const styles = active ? "join-item btn btn-sm btn-active" : "join-item btn btn-sm"
    return (
        <button className={styles} onClick={paginationOnClick(page)}>{page}</button>
    )
}

// to show all buttons for pagination
function ShowPagination({ numPages, currPage, paginationOnClick }) {
    const buttons = [];
    for (let page = 1; page <= numPages; page++) {
        if (page === currPage) {
            buttons.push(<ButtonForEachPage page={page} active={true} paginationOnClick={paginationOnClick}/>);
        } else {
            buttons.push(<ButtonForEachPage page={page} active={false} paginationOnClick={paginationOnClick}/>);
        }
    }
    return buttons;
}

// to show all the cards
function ShowCardsFromArrayOfData({ products, currPage, readMoreOnClick }) {
    // .slice(offset, offset + limit)
    products = products.slice((currPage - 1) * 6, currPage * 6);
    return (
        <>
            { products.map(product => {
                return (
                    <div key={product.id} className="card bg-base-100 shadow-xl">
                        <figure>
                            <img
                            src={product.imgUrl}
                            alt="Product image"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.name}</h2>
                            <p>{product.description}</p>
                            <div className="card-actions justify-end mt-2">
                                <button 
                                    className="btn btn-primary" 
                                    onClick={readMoreOnClick(product.id)}
                                > Read More
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }) }
        </>
    )
}

// main function
function Products({ readMoreOnClick }) {
    const products = [{"id":2,"name":"Silver Sulfadiazine","description":"It is a prescription medicine used to lower high blood pressure.","price":904,"stock":90,"imgUrl":"http://K+\\.LDsf/-**","categoryId":3,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":3,"name":"ARSAINTE ECO THERAPY SUPER REPAIR BB","description":"It is a prescription medicine used to lower high blood pressure.","price":780,"stock":5,"imgUrl":"http://6+\\.rqRqHy/A**","categoryId":2,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":4,"name":"SUNBAR SPF 30","description":"This medication is known to relieve pain and reduce inflammation.","price":272,"stock":1,"imgUrl":"http://z+\\.yO/1**","categoryId":2,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":5,"name":"Canadian Blue Grass","description":"It is a prescription medicine used to lower high blood pressure.","price":904,"stock":89,"imgUrl":"http://5+\\.vvC/5**","categoryId":1,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":6,"name":"Cefaclor","description":"This medication is known to relieve pain and reduce inflammation.","price":544,"stock":54,"imgUrl":"http://R+\\.rbSx/7**","categoryId":3,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":7,"name":"Pravastatin Sodium","description":"This drug is used to treat common cold symptoms.","price":476,"stock":8,"imgUrl":"https://O+\\.Bvhsas/-**","categoryId":2,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":8,"name":"Anti-Bacterial Hand","description":"This medication is known to relieve pain and reduce inflammation.","price":605,"stock":13,"imgUrl":"http://.+\\.ayw/Q**","categoryId":3,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":9,"name":"Lysol","description":"This drug is used to treat common cold symptoms.","price":238,"stock":47,"imgUrl":"http://6+\\.nqMj/.**","categoryId":2,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":10,"name":"EQUALINE","description":"This medication is known to relieve pain and reduce inflammation.","price":119,"stock":63,"imgUrl":"http://9+\\.zSBTLK/P**","categoryId":1,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":11,"name":"Maximum Strength Menstrual Relief","description":"This drug is used to treat common cold symptoms.","price":931,"stock":2,"imgUrl":"https://9+\\.jbvXa/9**","categoryId":1,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":12,"name":"O HUI WHITE EXTREME CELLIGHT","description":"This medication is known to relieve pain and reduce inflammation.","price":386,"stock":36,"imgUrl":"https://4+\\.Lnsxbf/.**","categoryId":2,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":13,"name":"Pleo Nig","description":"This medication is known to relieve pain and reduce inflammation.","price":96,"stock":38,"imgUrl":"https://2+\\.Cex/.**","categoryId":2,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":14,"name":"Instant Hand Sanitizer Strawberry Kiss","description":"This medication is known to relieve pain and reduce inflammation.","price":140,"stock":43,"imgUrl":"http://.+\\.bT/W**","categoryId":3,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":15,"name":"Indapamide","description":"This medication is known to relieve pain and reduce inflammation.","price":162,"stock":34,"imgUrl":"http://7+\\.NdyYE/3**","categoryId":2,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":16,"name":"Tea Blend Samples","description":"It is a prescription medicine used to lower high blood pressure.","price":193,"stock":48,"imgUrl":"https://r+\\.uM/4**","categoryId":3,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":17,"name":"ESIKA HYDRACOLOR 2 IN 1 HIGHLY MOISTURIZING AND COLORING SPF 25","description":"This drug is used to treat common cold symptoms.","price":726,"stock":85,"imgUrl":"https://e+\\.VGXr/S**","categoryId":2,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":18,"name":"Doxycycline Hyclate","description":"This medication is known to relieve pain and reduce inflammation.","price":287,"stock":12,"imgUrl":"https://.+\\.KFpsC/H**","categoryId":2,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":19,"name":"Naproxen Sodium","description":"It is a prescription medicine used to lower high blood pressure.","price":642,"stock":81,"imgUrl":"http://d+\\.QI/i**","categoryId":2,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":20,"name":"Klonopin","description":"This drug is used to treat common cold symptoms.","price":631,"stock":34,"imgUrl":"http://w+\\.vJ/l**","categoryId":3,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":21,"name":"Harmon Face Values Daily Facial","description":"This medication is known to relieve pain and reduce inflammation.","price":144,"stock":45,"imgUrl":"http://Z+\\.PdrrV/K**","categoryId":1,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":22,"name":"Nitrofurantoin Macrocrystals","description":"It is a prescription medicine used to lower high blood pressure.","price":882,"stock":57,"imgUrl":"http://.+\\.YtYv/5**","categoryId":3,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":23,"name":"Levocarnitine","description":"This drug is used to treat common cold symptoms.","price":529,"stock":73,"imgUrl":"https://3+\\.gyMRfe/v**","categoryId":3,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":24,"name":"Ondansetron Hydrochloride","description":"It is a prescription medicine used to lower high blood pressure.","price":74,"stock":72,"imgUrl":"https://-+\\.IeIOS/i**","categoryId":3,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"}];
    const [currPage, setCurrPage] = useState(1);
    const numPages = Math.ceil(products.length / 6);  // assume 6 items on each page
    function paginationOnClick(page) {
        return () => { setCurrPage(page) }
    }

    return (
        <>
            <main className="grid grid-cols-4 gap-5 px-10 my-8 bg-base-100">
                <ShowCardsFromArrayOfData products={products} currPage={currPage} readMoreOnClick={readMoreOnClick}/>
            </main>
            <footer className="text-center m-3">
                <div className="join">
                    <ShowPagination numPages={numPages} currPage={currPage} paginationOnClick={paginationOnClick}/>
                </div>
            </footer>
        </>
    )
}

export default Products;