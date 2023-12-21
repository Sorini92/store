/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Categories from "@/components/Categories";
import Products from "@/components/Products";
import { getAllProducts } from "@/services/productsService";
import { useEffect, useState } from "react";

const products = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllProducts()
            .then(setProducts)
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            <h1 className="title">Products Page</h1>
            <Categories setLoading={setLoading} onSelect={setProducts} />
            {loading ? (
                <h3 style={{ textAlign: "center" }}>Loading...</h3>
            ) : (
                <Products products={products} />
            )}
        </>
    );
};

export default products;
