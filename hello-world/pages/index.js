import Link from 'next/link';

function Home({ title }) {
  return (
    <div>
      <h1>{title}</h1>
      <Link href='/blog'>Blog</Link>
      <Link href='/product'>Product</Link>
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
