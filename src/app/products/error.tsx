"use client";

export default function ErrorWrapper({ error }: { error: Error }) {
    return <h1 style={{ textAlign: "center" }}>Oops!!! {error.message}</h1>;
}
