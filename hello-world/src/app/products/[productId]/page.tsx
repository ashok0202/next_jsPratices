export default async function Products({
   params, 
  }: { 
    params: Promise<{ productId: string }>
   }) {
    const productId = (await params).productId
    return <h1>Detail Product {productId}</h1>
}