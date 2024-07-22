import Link from "next/link";

export default function NotFound() {
  return (
    <main className="my-32 w-full dark:bg-dark flex justify-center font-mr">
      <div className="relative flex flex-col items-center justify-center">
        <h1
          className={`inline-block text-dark dark:text-light
      text-6xl font-bold w-full capitalize xl:text-8xl text-center`}
        >
          404
        </h1>
        <h2
          className={`inline-block text-dark dark:text-light
      text-5xl font-bold w-full capitalize xl:text-6xl text-center mt-4 tracking-wide leading-snug`}
        >
          Halaman Tidak Ditemukan!
        </h2>
        <p className="text-dark dark:text-light mt-4">
          Ups! Halaman yang Anda cari tidak ada.
        </p>
        <Link
          href="/"
          className="self-center mt-8 inline-block rounded-lg border-2 border-solid bg-dark px-4 py-2
        font-semibold text-light hover:border-dark hover:bg-light hover:text-dark 
        dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
        "
        >
          Kembali Beranda
        </Link>
      </div>
    </main>
  );
}
