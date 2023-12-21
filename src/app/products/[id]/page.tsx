import { Metadata } from "next";
import Link from "next/link";

async function getData(id: number) {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        next: {
            revalidate: 60,
        },
    });

    if (!response.ok) throw Error("Unable to fetch");

    return response.json();
}

type Props = {
    params: {
        id: number;
    };
};

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
    const product = await getData(id);

    return {
        title: `${product.title} | Next app`,
    };
}

const product = async ({ params: { id } }: Props) => {
    const product = await getData(id);

    return (
        <div className="singleProduct">
            <div className="singleProductImg">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="singleProductText">
                <h2 className="singleProductTitle">{product.title}</h2>
                <div className="singleProductDescr">{product.description}</div>
                <Link href="/products" className="singleProductBtn">
                    Back
                </Link>
                <div className="singleProductPrice">{product.price}$</div>
            </div>
        </div>
    );
};

export default product;
