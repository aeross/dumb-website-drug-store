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
            buttons.push(<ButtonForEachPage key={page} page={page} active={true} paginationOnClick={paginationOnClick}/>);
        } else {
            buttons.push(<ButtonForEachPage key={page} page={page} active={false} paginationOnClick={paginationOnClick}/>);
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
    const products = [{"id":2,"name":"Silver Sulfadiazine","description":"It is a prescription medicine used to lower high blood pressure.","price":904,"stock":90,"imgUrl":"http://K+\\.LDsf/-**","categoryId":3,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":3,"name":"ARSAINTE ECO THERAPY SUPER REPAIR BB","description":"It is a prescription medicine used to lower high blood pressure.","price":780,"stock":5,"imgUrl":"http://6+\\.rqRqHy/A**","categoryId":2,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":4,"name":"SUNBAR SPF 30","description":"This medication is known to relieve pain and reduce inflammation.","price":272,"stock":1,"imgUrl":"http://z+\\.yO/1**","categoryId":2,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":5,"name":"Canadian Blue Grass","description":"It is a prescription medicine used to lower high blood pressure.","price":904,"stock":89,"imgUrl":"http://5+\\.vvC/5**","categoryId":1,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":6,"name":"Cefaclor","description":"This medication is known to relieve pain and reduce inflammation.","price":544,"stock":54,"imgUrl":"http://R+\\.rbSx/7**","categoryId":3,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":7,"name":"Pravastatin Sodium","description":"This drug is used to treat common cold symptoms.","price":476,"stock":8,"imgUrl":"https://O+\\.Bvhsas/-**","categoryId":2,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":8,"name":"Anti-Bacterial Hand","description":"This medication is known to relieve pain and reduce inflammation.","price":605,"stock":13,"imgUrl":"http://.+\\.ayw/Q**","categoryId":3,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":9,"name":"Lysol","description":"This drug is used to treat common cold symptoms.","price":238,"stock":47,"imgUrl":"http://6+\\.nqMj/.**","categoryId":2,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":10,"name":"EQUALINE","description":"This medication is known to relieve pain and reduce inflammation.","price":119,"stock":63,"imgUrl":"http://9+\\.zSBTLK/P**","categoryId":1,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":11,"name":"Maximum Strength Menstrual Relief","description":"This drug is used to treat common cold symptoms.","price":931,"stock":2,"imgUrl":"https://9+\\.jbvXa/9**","categoryId":1,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":12,"name":"O HUI WHITE EXTREME CELLIGHT","description":"This medication is known to relieve pain and reduce inflammation.","price":386,"stock":36,"imgUrl":"https://4+\\.Lnsxbf/.**","categoryId":2,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":13,"name":"Pleo Nig","description":"This medication is known to relieve pain and reduce inflammation.","price":96,"stock":38,"imgUrl":"https://2+\\.Cex/.**","categoryId":2,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":14,"name":"Instant Hand Sanitizer Strawberry Kiss","description":"This medication is known to relieve pain and reduce inflammation.","price":140,"stock":43,"imgUrl":"http://.+\\.bT/W**","categoryId":3,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":15,"name":"Indapamide","description":"This medication is known to relieve pain and reduce inflammation.","price":162,"stock":34,"imgUrl":"http://7+\\.NdyYE/3**","categoryId":2,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":16,"name":"Tea Blend Samples","description":"It is a prescription medicine used to lower high blood pressure.","price":193,"stock":48,"imgUrl":"https://r+\\.uM/4**","categoryId":3,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":17,"name":"ESIKA HYDRACOLOR 2 IN 1 HIGHLY MOISTURIZING AND COLORING SPF 25","description":"This drug is used to treat common cold symptoms.","price":726,"stock":85,"imgUrl":"https://e+\\.VGXr/S**","categoryId":2,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":18,"name":"Doxycycline Hyclate","description":"This medication is known to relieve pain and reduce inflammation.","price":287,"stock":12,"imgUrl":"https://.+\\.KFpsC/H**","categoryId":2,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":19,"name":"Naproxen Sodium","description":"It is a prescription medicine used to lower high blood pressure.","price":642,"stock":81,"imgUrl":"http://d+\\.QI/i**","categoryId":2,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":20,"name":"Klonopin","description":"This drug is used to treat common cold symptoms.","price":631,"stock":34,"imgUrl":"http://w+\\.vJ/l**","categoryId":3,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":21,"name":"Harmon Face Values Daily Facial","description":"This medication is known to relieve pain and reduce inflammation.","price":144,"stock":45,"imgUrl":"http://Z+\\.PdrrV/K**","categoryId":1,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":22,"name":"Nitrofurantoin Macrocrystals","description":"It is a prescription medicine used to lower high blood pressure.","price":882,"stock":57,"imgUrl":"http://.+\\.YtYv/5**","categoryId":3,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":23,"name":"Levocarnitine","description":"This drug is used to treat common cold symptoms.","price":529,"stock":73,"imgUrl":"https://3+\\.gyMRfe/v**","categoryId":3,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":24,"name":"Ondansetron Hydrochloride","description":"It is a prescription medicine used to lower high blood pressure.","price":74,"stock":72,"imgUrl":"https://-+\\.IeIOS/i**","categoryId":3,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":25,"name":"EMINENCE Bright Skin Moisturizer BROAD SPECTRUM SPF 30 SUNSCREEN","description":"This drug is used to treat common cold symptoms.","price":896,"stock":14,"imgUrl":"http://.+\\.xEPp/-**","categoryId":1,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":26,"name":"BuPROPion Hydrochloride","description":"This drug is used to treat common cold symptoms.","price":743,"stock":64,"imgUrl":"https://-+\\.Px/H**","categoryId":1,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":27,"name":"Lamotrigine","description":"It is a prescription medicine used to lower high blood pressure.","price":964,"stock":74,"imgUrl":"http://1+\\.sXjBf/l**","categoryId":3,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":28,"name":"Envirokleen Non-Alcohol Instant Hand Sanitizer","description":"This medication is known to relieve pain and reduce inflammation.","price":835,"stock":75,"imgUrl":"http://-+\\.ae/z**","categoryId":2,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":29,"name":"Temozolomide","description":"It is a prescription medicine used to lower high blood pressure.","price":645,"stock":61,"imgUrl":"https://6+\\.uiz/6**","categoryId":2,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":30,"name":"Soothing Moisturizing","description":"It is a prescription medicine used to lower high blood pressure.","price":909,"stock":20,"imgUrl":"https://L+\\.ang/l**","categoryId":3,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":31,"name":"ciprofloxacin","description":"It is a prescription medicine used to lower high blood pressure.","price":638,"stock":96,"imgUrl":"http://j+\\.rXgCF/y**","categoryId":2,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":32,"name":"Divista","description":"This drug is used to treat common cold symptoms.","price":507,"stock":61,"imgUrl":"https://i+\\.ri/4**","categoryId":1,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":33,"name":"MORELLA CERIFERA POLLEN","description":"This medication is known to relieve pain and reduce inflammation.","price":105,"stock":37,"imgUrl":"http://.+\\.zSzXoC/Q**","categoryId":3,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":34,"name":"Naftin","description":"It is a prescription medicine used to lower high blood pressure.","price":967,"stock":24,"imgUrl":"https://I+\\.wPLu/t**","categoryId":3,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":35,"name":"Metformin Hydrochloride","description":"This drug is used to treat common cold symptoms.","price":117,"stock":20,"imgUrl":"https://.+\\.MN/8**","categoryId":2,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":36,"name":"Hydrocodone Bitartrate and Acetaminophen","description":"This drug is used to treat common cold symptoms.","price":432,"stock":95,"imgUrl":"https://X+\\.pdSea/-**","categoryId":1,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},
    {"id":37,"name":"Duloxetine","description":"It is a prescription medicine used to lower high blood pressure.","price":129,"stock":47,"imgUrl":"http://1+\\.jsVBO/x**","categoryId":2,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":38,"name":"Pleo Lat","description":"This drug is used to treat common cold symptoms.","price":340,"stock":27,"imgUrl":"https://.+\\.nes/P**","categoryId":3,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":39,"name":"Jilgyungyi","description":"This drug is used to treat common cold symptoms.","price":972,"stock":48,"imgUrl":"https://4+\\.RhgvCV/L**","categoryId":2,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":40,"name":"SULINDAC","description":"It is a prescription medicine used to lower high blood pressure.","price":987,"stock":7,"imgUrl":"https://D+\\.hAjWQ/N**","categoryId":3,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":41,"name":"Levetiracetam","description":"This drug is used to treat common cold symptoms.","price":830,"stock":53,"imgUrl":"http://d+\\.hPcN/.**","categoryId":3,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":42,"name":"DR. RECKEWEG R47 Neuroglobin","description":"It is a prescription medicine used to lower high blood pressure.","price":678,"stock":58,"imgUrl":"http://.+\\.hoSsL/-**","categoryId":3,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":43,"name":"Gaboxetine","description":"It is a prescription medicine used to lower high blood pressure.","price":364,"stock":15,"imgUrl":"https://b+\\.DI/.**","categoryId":1,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":44,"name":"Triamterene and Hydrochlorothiazide","description":"This drug is used to treat common cold symptoms.","price":306,"stock":40,"imgUrl":"https://A+\\.Oporhu/-**","categoryId":3,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":45,"name":"POVIDONE IODINE SWABSTICS ANTISEPTIC GERMICIDE","description":"This medication is known to relieve pain and reduce inflammation.","price":607,"stock":79,"imgUrl":"https://.+\\.Wj/.**","categoryId":3,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":46,"name":"topcare day time nite time","description":"This medication is known to relieve pain and reduce inflammation.","price":37,"stock":76,"imgUrl":"http://K+\\.ZhL/P**","categoryId":3,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":47,"name":"Propranolol Hydrochloride","description":"This medication is known to relieve pain and reduce inflammation.","price":712,"stock":39,"imgUrl":"https://0+\\.TuV/.**","categoryId":1,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":48,"name":"Risperidone","description":"It is a prescription medicine used to lower high blood pressure.","price":224,"stock":73,"imgUrl":"http://I+\\.MXiG/-**","categoryId":3,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":49,"name":"Vazculep","description":"It is a prescription medicine used to lower high blood pressure.","price":943,"stock":20,"imgUrl":"http://.+\\.OM/E**","categoryId":1,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":50,"name":"Lamotrigine","description":"This medication is known to relieve pain and reduce inflammation.","price":218,"stock":2,"imgUrl":"https://.+\\.WsttE/.**","categoryId":1,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":51,"name":"sunmark loperamide hydrochloride","description":"This medication is known to relieve pain and reduce inflammation.","price":401,"stock":22,"imgUrl":"http://4+\\.Aq/-**","categoryId":1,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":52,"name":"TRUVADA","description":"This medication is known to relieve pain and reduce inflammation.","price":732,"stock":82,"imgUrl":"http://s+\\.crfViq/V**","categoryId":1,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":53,"name":"Junior Strength Pain Relief","description":"This medication is known to relieve pain and reduce inflammation.","price":477,"stock":9,"imgUrl":"http://.+\\.xGIs/.**","categoryId":3,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":54,"name":"Topiramate","description":"This medication is known to relieve pain and reduce inflammation.","price":224,"stock":43,"imgUrl":"https://3+\\.ZccyT/.**","categoryId":1,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":55,"name":"Oxygen","description":"This drug is used to treat common cold symptoms.","price":171,"stock":6,"imgUrl":"https://k+\\.BpqbTc/j**","categoryId":2,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":56,"name":"Topiclear Xtra beauty","description":"This drug is used to treat common cold symptoms.","price":591,"stock":23,"imgUrl":"https://2+\\.JR/0**","categoryId":1,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":57,"name":"SENEXON-S","description":"This drug is used to treat common cold symptoms.","price":619,"stock":62,"imgUrl":"http://L+\\.AEtXQ/7**","categoryId":1,"authorId":2,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T06:00:38.241Z"},{"id":1,"name":"Green Ash","description":"This medication is known to relieve pain and reduce inflammation.","price":261,"stock":90,"imgUrl":"https://ik.imagekit.io/aeross/Screenshot__1__KPczJO5se.png","categoryId":1,"authorId":1,"createdAt":"2023-11-03T06:00:38.241Z","updatedAt":"2023-11-03T08:44:18.207Z"}];
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
                    <span></span>
                </div>
            </footer>
        </>
    )
}

export default Products;