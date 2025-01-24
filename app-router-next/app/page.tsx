import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>TEST NEXT JS</h1>
      <br />
      {/* Use Link provided by Next rather than a tag */}
      {/* a tag is more intensive resource because it rerender all asset */}
      <Link href="/posts">POSTING PAGE</Link>
      <br />
      <Link href="/albums">ALBUM PAGE PAGE</Link>
    </>
  );
}
