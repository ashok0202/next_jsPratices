import {notFound} from 'next/navigation';
export default async function ProductReviewId(

    {params,   
    }: {params:Promise<{productId: string,reviewId: string}>}) {
        const {productId,reviewId}= await params
        if(parseInt(reviewId)===0) {
            return notFound();
        }
        if(parseInt(reviewId)>1000) {
            notFound();
        }
    return <h1>ProductsById {productId} Detail Review {reviewId}</h1>
}