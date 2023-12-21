export async function getAllProducts() {
    const response = await fetch(`https://fakestoreapi.com/products`, {
        next: {
            revalidate: 60,
        },
    });

    if (!response.ok) throw Error("Unable to fetch");

    return response.json();
}

export async function getProductsByCategory(category: string) {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`, {
        next: {
            revalidate: 60,
        },
    });

    if (!response.ok) throw Error("Unable to fetch");

    return response.json();
}

export async function getCategories() {
    const response = await fetch(`https://fakestoreapi.com/products/categories`, {
        next: {
            revalidate: 60,
        },
    });

    if (!response.ok) throw Error("Unable to fetch");

    return response.json();
}
