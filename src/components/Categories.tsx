import { getAllProducts, getCategories, getProductsByCategory } from "@/services/productsService";
import { useState, useEffect } from "react";

type Props = {
    onSelect: (selected: any[]) => void;
    setLoading: (state: boolean) => void;
};

const Categories = ({ onSelect, setLoading }: Props) => {
    const [categories, setCategories] = useState<any[]>([]);
    const [activeCategory, setActiveCategory] = useState("");

    useEffect(() => {
        getCategories().then(setCategories);
    }, []);

    const handleSelect = async (selected: string) => {
        setLoading(true);
        setActiveCategory(selected);

        if (selected) {
            const productsByCategory = await getProductsByCategory(selected);

            onSelect(productsByCategory);
            setLoading(false);
        } else {
            const productsByCategory = await getAllProducts();

            onSelect(productsByCategory);
            setLoading(false);
        }
    };

    return (
        <ul className="categories">
            <li
                className={activeCategory === "" ? "category active" : "category"}
                onClick={() => handleSelect("")}
            >
                All categories
            </li>
            {categories.map((item: any, i: number) => (
                <li
                    className={activeCategory === item ? "category active" : "category"}
                    key={i}
                    onClick={() => handleSelect(item)}
                >
                    {item}
                </li>
            ))}
        </ul>
    );
};

export default Categories;
