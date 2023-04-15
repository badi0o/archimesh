import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - Archimesh' : 'Archimesh'}</title>
        <meta name="description" content="Architectual models" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link className="text-lg font-bold" href="/">
              Archimesh
            </Link>
            <div>
              <Link className="p-2" href="/cart">
                Cart
              </Link>
              <Link className="p-2" href="/login">
                Login
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          Copyright &copy; {new Date().getFullYear()} Archimesh
        </footer>
      </div>
    </>
  );
}
