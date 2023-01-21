import Link from 'next/link';
import { useRouter } from 'next/router';

function Home({ title }) {
  const router = useRouter();

  const handleClick = () => {
    console.log('Placing your order');
    router.push('./product');
  };

  return (
    <div>
      <h1>{title}</h1>
      <Link href='/blog'>Blog</Link>
      <Link href='/product'>Product</Link>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}

export default Home;

export const getServerSideProps = async () => {
  return {
    props: {
      title: 'Home Page!',
    },
  };
};
