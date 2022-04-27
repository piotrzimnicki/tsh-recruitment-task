import React, {useState} from "react";
import {SingleProductInt} from "../../types/global_interfaces";
import {SingleProduct} from "../SingleProduct/SingleProduct";
import {Spinner} from "../../common/Spinner/Spinner";
import {NoProductsFound} from "../NoProductsFound/NoProductsFound";
import {PaginationCached} from "../Pagination/PaginationCached";


interface Props {
    products:  SingleProductInt[] | null;
}

export const ProductsContainer = ({products}: Props) => {


    const [currentPage,setCurrentPage] = useState(1);

    const productsPerPage = 8;

    const pagesNumber = products ? Math.ceil(products?.length / productsPerPage) : 1;
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products && products.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <section className={`products fadeIn${products === null ? " no-background" : ""}`}>
            <div className="inner container-inner">
                {
                    currentProducts ?
                        currentProducts.map(el =>
                            <SingleProduct
                                singleData={el}
                                key={el.id}
                            />) :
                        <Spinner/>
                }
                {currentProducts && currentProducts?.length === 0 && <NoProductsFound/>}
            </div>
            {
                pagesNumber > 1 &&
                <div className="pagination-wrapper">
                    <div className="inner">
                        <PaginationCached
                            pagesToShow={3}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            pagesNumber={pagesNumber}
                        />
                    </div>
                </div>
            }
        </section>
    )
}