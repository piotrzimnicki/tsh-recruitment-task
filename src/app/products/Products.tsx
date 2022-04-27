import React, {useEffect, useRef, useState} from 'react';
import {Header} from "./Header/Header";
import {FetchedObjects, MetaInt, SearchDataInt, SingleProductInt} from "../types/global_interfaces";
import "./Products.css";
import {ProductsContainer} from "./ProductsContainer/ProductsContainer";

export const Products = () => {
    const [products, setProducts] = useState<SingleProductInt[] | null>(null);
    const [meta,setMeta] = useState<MetaInt | null>(null);

    const [searchData, setSearchData] = useState<SearchDataInt>({
        text: '',
        active: false,
        promo: false
    })
    const isMounted = useRef(false);

    const {text, active, promo} = searchData;

    const productsLimit: number | null = null;  // products limit from api call

    const baseUrl = `
    https://join-tsh-api-staging.herokuapp.com/products?${productsLimit ? `&limit=${productsLimit}` : ""}
    `;
    const urlWithFilters =
        `
            ${baseUrl}
            ${active ? "&active=true" : ""}
            ${promo ? "&promo=true" : ""}
            ${text !== "" ? `&search=${text}` : ""}
        `.replace(/(\r\n|\n|\r)/gm, '').replaceAll(' ', '');

    async function getData(url:string) {
            setProducts(null);
            setMeta(null);
        try {
            const res = await fetch(url);
            const data: FetchedObjects = await res.json();
            setProducts(data.items);
            setMeta(data.meta);
        } catch (e) {
            console.log(e)
        }
    }

    //Fetch data on load
    useEffect(() => {
        getData(urlWithFilters);
    }, []);

    //Search checkbox handler
    useEffect(() => {
            if(isMounted.current) {
                getData(urlWithFilters)
            }
    }, [searchData.promo,searchData.active]);

    //Search text handler
    useEffect(() => {
        if(!isMounted.current) {
            isMounted.current = true;
            return;
        }
        const delay = setTimeout(() => {
            getData(urlWithFilters);
        },1000);
        return () => clearTimeout(delay);
    },[searchData.text])

    return (
        <div className="default-container">
            <Header searchData={searchData} setSearchData={setSearchData}/>
            <section className={`products fadeIn${products === null ? " no-background" : ""}`}>
                <ProductsContainer products={products} />
            </section>
        </div>
    );
};
