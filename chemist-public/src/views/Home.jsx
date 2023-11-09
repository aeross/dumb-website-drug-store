import Card from "../components/Card";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home({ url }) {
    // products
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [currPage, setCurrPage] = useState([]);
    const [totalPage, setTotalPage] = useState([]);
    const [limit, setLimit] = useState(0);
    const [query, setQuery] = useState({
        page: "",
        search: "",
        sort: "",
        limit: "",
        filter: ""
    });

    useEffect(() => {
        async function fetchProducts() {
            const { data } = await axios.get(`${url}pub/product`);
            setProducts(data.products);
            setCount(data.count);
            setCurrPage(data.currPage);
            setTotalPage(data.totalPage);
            setLimit(data.limit);
        }
        fetchProducts();
    }, [])

    // functions to handle query params
        async function updateQuery(newQuery) {
            const { page, search, sort, limit, filter } = newQuery;
            let newURL = `${url}pub/product?`;
            if (page) newURL += `&page=${page}`;
            if (search) newURL += `&search=${search}`;
            if (sort) newURL += `&sort=${sort}`;
            if (limit) newURL += `&limit=${limit}`;
            if (filter) newURL += `&filter[categoryId]=${filter}`;
            
            const { data } = await axios.get(newURL);
            setProducts(data.products);
            setCount(data.count);
            setCurrPage(data.currPage);
            setTotalPage(data.totalPage);
            setLimit(data.limit);
        }
    
    async function paginationBtnOnClick(clickedPage) {
        let newQuery = { ...query, page: `${clickedPage}` }
        setQuery(newQuery);
        updateQuery(newQuery);
    }


    return (<>
        <div id="PAGE-HOME" className="">
            <main className="grid grid-cols-4 gap-5 px-10 my-8 bg-base-100">
                { products.map(product => {
                    return <Card product={product} />
                })}
            </main>
            <footer className="text-center m-3 flex flex-col justify-center items-center gap-2">
                <div className="join">
                    { (() => {
                        let pages = [];
                        for (let page = 1; page <= totalPage; page++) {
                            console.log(currPage, page, "<<<");
                            if (currPage === page) {
                                pages.push(<button key={page} className="join-item btn btn-sm btn-active" 
                                    onClick={() => { paginationBtnOnClick(page) }}>{page}</button>);
                            } else {
                                pages.push(<button key={page} className="join-item btn btn-sm" 
                                    onClick={() => { paginationBtnOnClick(page) }}>{page}</button>);
                            }
                        }
                        return pages;
                    })() }
                    {/* <button className="join-item btn btn-sm btn-active">1</button>
                    <button className="join-item btn btn-sm">2</button>
                    <button className="join-item btn btn-sm">3</button>
                    <button className="join-item btn btn-sm">4</button> */}
                </div>

                <div className="indicator">
                    <input type="number" className="input input-bordered input-sm mx-2 w-32" placeholder="Limit data"/>
                    {/* <button type="submit" className="btn btn-sm join-item">Limit</button> */}
                </div>
            </footer>
        </div>
    </>)
}