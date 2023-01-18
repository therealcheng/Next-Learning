import { useRouter } from 'next/router';
import Link from 'next/link';

const ProductDetails = () => {
  const router = useRouter();
  const productId = router.query.productId; // same as file name [productId]
  return <div>Details about product {productId}</div>;
};

export default ProductDetails;
