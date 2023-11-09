import Card from "../components/Card";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home({ url }) {
    const [products, setProducts] = useState([]);
    const [currPage, setCurrPage] = useState([]);
    const [totalPage, setTotalPage] = useState([]);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");
    const [query, setQuery] = useState({
        page: "",
        search: "",
        sort: "",
        limit: "",
        filter: ""
    });

    // init
    useEffect(() => {
        async function fetchProducts() {
            const { data } = await axios.get(`${url}pub/product`);
            setProducts(data.products);
            setCurrPage(data.currPage);
            setTotalPage(data.totalPage);
        }
        fetchProducts();
    }, [])

    // functions to handle query params (NOTE: bad requests not handled yet)
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
        setCurrPage(data.currPage);
        setTotalPage(data.totalPage);
        setQuery(newQuery);
    }
    
    // pagination
    async function paginationBtnOnClick(clickedPage) {
        let newQuery = { ...query, page: `${clickedPage}` }
        updateQuery(newQuery);
    }
    function limitOnChange(event) {
        let newQuery = { ...query, limit: event.target.value }
        updateQuery(newQuery);
    }

    // search
    function searchOnChange(event) {
        let newSearch = event.target.value;
        setSearch(newSearch);
    }
    function applySearch(event) {
        event.preventDefault();
        let newQuery = { ...query, search: search }
        updateQuery(newQuery);
    }

    // sort
    function sortOnChange(event) {
        let newSort = event.target.value;
        setSort(newSort);
    }
    function applySort(event) {
        event.preventDefault();
        let newQuery = { ...query, sort: sort }
        updateQuery(newQuery);
    }


    return (<>
        <div id="PAGE-HOME" className="">
            <header className="pt-5 flex justify-center items-center">
                {/* filter */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn mx-2 btn-primary btn-sm">Filter</label>
                    <form method="get" className="dropdown-content z-[1] menu px-3 m-1 shadow bg-base-100 rounded-box w-64">
                        <div className="flex items-center justify-between">
                            <label htmlFor="a">Prescription Only Medication</label>
                            <input id="a" name="categoryId" value="1" type="checkbox" className="m-2 h-7 w-7 rounded hover:cursor-pointer accent-primary" />
                        </div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="b">General Sales List</label>
                            <input id="b" name="categoryId" value="2" type="checkbox" className="m-2 h-7 w-7 rounded hover:cursor-pointer accent-primary" />
                        </div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="c">Pharmacy Medicines</label>
                            <input id="c" name="categoryId" value="3" type="checkbox" className="m-2 h-7 w-7 rounded hover:cursor-pointer accent-primary" />
                        </div>
                        <div className="flex items-center justify-center">
                            <button className="btn btn-sm btn-primary h-2 w-16" type="submit">Apply</button>
                        </div>
                    </form>
                </div>

                {/* sort */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn mx-2 btn-primary btn-sm">Sort</label>
                    <form method="get" className="dropdown-content z-[1] menu px-3 m-1 shadow bg-base-100 rounded-box w-64">
                        <div className="flex items-center justify-between">
                            <label htmlFor="desc">Newest</label>
                            <input onChange={sortOnChange} id="desc" name='sort' value="-createdAt" type="radio" className="m-2 h-7 w-7 rounded hover:cursor-pointer accent-primary" />
                        </div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="asc">Oldest</label>
                            <input onChange={sortOnChange} id="asc" name='sort' value="createdAt" type="radio" className="m-2 h-7 w-7 rounded hover:cursor-pointer accent-primary" />
                        </div>
                        <div className="flex items-center justify-center">
                            <button onClick={applySort} className="btn btn-sm btn-primary h-2 w-16" type="submit">Apply</button>
                        </div>
                    </form>
                </div>

                {/* search */}
                <form action="" method="get" className="flex justify-center items-center">
                    <input
                        type="search"
                        name="search"
                        placeholder="Search"
                        className="input input-bordered input-primary w-24 md:w-auto mx-1 input-sm"
                        onChange={searchOnChange}
                    />
                    <button onClick={applySearch} type="submit" className="btn btn-ghost btn-circle" >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </button>
                </form>
            </header>

            {/* main content */}
            <main className="grid grid-cols-4 gap-5 px-10 my-8 bg-base-100">
                { products.map(product => {
                    return <Card product={product} />
                })}
            </main>

            {/* pagination */}
            <footer className="text-center m-3 flex flex-col justify-center items-center gap-2">
                <div className="join">
                    { (() => {
                        let pages = [];
                        for (let page = 1; page <= totalPage; page++) {
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
                    <input 
                        type="number" 
                        className="input input-bordered input-sm mx-2 w-32" 
                        placeholder="Limit data"
                        onChange={limitOnChange}
                    />
                    {/* <button type="submit" className="btn btn-sm join-item">Limit</button> */}
                </div>
            </footer>
        </div>
    </>)
}