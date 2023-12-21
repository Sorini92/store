import Link from "next/link";

type Props = {
    products: any[];
};

const Products = ({ products }: Props) => {
    return (
        <div className="products">
            {products.map((product: any, i: number) => (
                <Link href={`products/${product.id}`} className="productsItem" key={i}>
                    <img src={product.image} alt={product.title} />
                    <div className="productTitle">{product.title}</div>
                    <div className="productCategory">{product.category}</div>
                    <div className="productPrice">{product.price}$</div>
                </Link>
            ))}
        </div>
    );
};

export default Products;
