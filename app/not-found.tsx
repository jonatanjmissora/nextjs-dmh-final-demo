import Image from 'next/image';
import img404 from './assets/404.jpg';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="h-screen w-screen bg-white flex justify-center items-center">
      <div className="w-full aspect-square sm:h-[70vh] sm:w-[70vh] relative">
        <Image
          className="object-cover"
          src={img404}
          alt="imagen del hero"
          quality={100}
          fill
          sizes="100vw"
          priority
          placeholder="blur"
        ></Image>
      </div>
      <Link
        className="nav-btn absolute bottom-[25%] form-btn shadow-lg sm:bottom-[15%]"
        href="/"
      >
        Volver
      </Link>
    </section>
  );
}