import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header>
      <div>
        <div className="topNav">
          <Image src="/images/logo_black.png" alt="logo" width={50} height={50} />
          <nav>
            <Link href="/">Home</Link>
            <Link href="/events">Events</Link>
            <Link href="/about-us">About Us</Link>
          </nav>
        </div>
        <p className="title">Lorem ipsum dolor sit amet</p>
      </div>
    </header>
  );
};
