import Link from 'next/link';
import Image from 'next/image';

export default function Movies() {
  return (
    <>
      <h1>My favorite movies</h1>
      <Image
        src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"
        alt="cinema"
        width={640}
        height={426}
      />
      <ul>
        <li>
          <Link href="/movies/hulk">Hulk</Link>
        </li>
        <li>
          <Link href="/movies/spiderman">Spiderman</Link>
        </li>
      </ul>
    </>
  );
}
