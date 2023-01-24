import Link from 'next/link';
export default function Home() {
  return (
    <>
      <h1>Next Pre-Rendering</h1>
      <Link href='/users'>Users</Link>
    </>
  );
}
