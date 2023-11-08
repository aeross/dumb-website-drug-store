import { useState } from 'react'

// to show a certain button for pagination, e.g. <button className="join-item btn btn-sm">3</button>
function ButtonForEachPage({ page, active, paginationOnClick }) {
    const styles = active ? "join-item btn btn-sm btn-active" : "join-item btn btn-sm"
    console.log(paginationOnClick(page), "\n\n");
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
function ShowCardsFromArrayOfData({ products, currPage }) {
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
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                )
            }) }
        </>
    )
}

// main function
function ProductsPublic() {
    const products = [
        {"id":2,"name":"Silver Sulfadiazine","description":"It is a prescription medicine used to lower high blood pressure.","price":904,"stock":90,"imgUrl":"http://K+\\.LDsf/-**","categoryId":3,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},
        {"id":3,"name":"ARSAINTE ECO THERAPY SUPER REPAIR BB","description":"It is a prescription medicine used to lower high blood pressure.","price":780,"stock":5,"imgUrl":"http://6+\\.rqRqHy/A**","categoryId":2,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},
        {"id":4,"name":"SUNBAR SPF 30","description":"This medication is known to relieve pain and reduce inflammation.","price":272,"stock":1,"imgUrl":"http://z+\\.yO/1**","categoryId":2,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},
        {"id":5,"name":"Canadian Blue Grass","description":"It is a prescription medicine used to lower high blood pressure.","price":904,"stock":89,"imgUrl":"http://5+\\.vvC/5**","categoryId":1,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},
        {"id":6,"name":"Canadian Blue Grass","description":"It is a prescription medicine used to lower high blood pressure.","price":904,"stock":89,"imgUrl":"http://5+\\.vvC/5**","categoryId":1,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},
        {"id":7,"name":"SUNBAR SPF 30","description":"This medication is known to relieve pain and reduce inflammation.","price":272,"stock":1,"imgUrl":"http://z+\\.yO/1**","categoryId":2,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},
        {"id":8,"name":"ARSAINTE ECO THERAPY SUPER REPAIR BB","description":"It is a prescription medicine used to lower high blood pressure.","price":780,"stock":5,"imgUrl":"http://6+\\.rqRqHy/A**","categoryId":2,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},
        {"id":9,"name":"ARSAINTE ECO THERAPY SUPER REPAIR BB","description":"It is a prescription medicine used to lower high blood pressure.","price":780,"stock":5,"imgUrl":"http://6+\\.rqRqHy/A**","categoryId":2,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},
        {"id":10,"name":"SUNBAR SPF 30","description":"This medication is known to relieve pain and reduce inflammation.","price":272,"stock":1,"imgUrl":"http://z+\\.yO/1**","categoryId":2,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},
        {"id":11,"name":"Canadian Blue Grass","description":"It is a prescription medicine used to lower high blood pressure.","price":904,"stock":89,"imgUrl":"http://5+\\.vvC/5**","categoryId":1,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},
        {"id":12,"name":"Canadian Blue Grass","description":"It is a prescription medicine used to lower high blood pressure.","price":904,"stock":89,"imgUrl":"http://5+\\.vvC/5**","categoryId":1,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},
        {"id":13,"name":"Silver Sulfadiazine","description":"It is a prescription medicine used to lower high blood pressure.","price":904,"stock":90,"imgUrl":"http://K+\\.LDsf/-**","categoryId":3,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},
        {"id":14,"name":"ARSAINTE ECO THERAPY SUPER REPAIR BB","description":"It is a prescription medicine used to lower high blood pressure.","price":780,"stock":5,"imgUrl":"http://6+\\.rqRqHy/A**","categoryId":2,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},
        {"id":15,"name":"SUNBAR SPF 30","description":"This medication is known to relieve pain and reduce inflammation.","price":272,"stock":1,"imgUrl":"http://z+\\.yO/1**","categoryId":2,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},
        {"id":16,"name":"Canadian Blue Grass","description":"It is a prescription medicine used to lower high blood pressure.","price":904,"stock":89,"imgUrl":"http://5+\\.vvC/5**","categoryId":1,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},
    ];
    const [currPage, setCurrPage] = useState(1);
    function paginationOnClick(page) {
        return () => {
            setCurrPage(page)
        }
    }
    const numPages = Math.ceil(products.length / 6);  // assume 6 items on each page

    return (
        <>
            <main className="grid grid-cols-4 gap-5 px-10 my-8 bg-base-100">
                <ShowCardsFromArrayOfData products={products} currPage={currPage}/>
            </main>
            <footer className="text-center m-3">
                <div className="join">
                    <ShowPagination numPages={numPages} currPage={currPage} paginationOnClick={paginationOnClick}/>
                    {/* for (let page = 1; page <= numPages; page++) {
                        <ButtonForEachPage page={page}/>
                    } */}
                    
                    {/* <button className="join-item btn btn-sm btn-active">1</button>
                    <button className="join-item btn btn-sm" onClick={paginationOnClick}>2</button>
                    <button className="join-item btn btn-sm">3</button>
                    <button className="join-item btn btn-sm">4</button> */}
                </div>
            </footer>
        </>
    )
}

export default ProductsPublic;