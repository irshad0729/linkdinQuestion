import { useRouter } from "next/router"

const ReviewDetails = () => {
    const router=useRouter();
    const {productId,reviewId}=router.query;
  return (
    <h1>This is review Id {reviewId} of Product Id: {productId}</h1>
  )
}

export default ReviewDetails;