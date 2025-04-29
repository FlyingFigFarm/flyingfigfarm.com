import "./globals.scss";
import Link from "next/link";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Flying Fig Farm</title>
        <style>
          @import
          url(&apos;https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Poetsen+One&display=swap&apos;);
        </style>
      </head>
      <body>
        <div className="mt-[65px]">
          <div className="bg-indigo-600 print:bg-transparent p-1 fixed print:absolute top-0 left-0 z-10 w-full whitespace-nowrap">
            <Image
              src="/assets/img/logo.png"
              alt=""
              height={55}
              width={55}
              className="float-left py-1 ml-2"
            />
            <Link
              className="text-white print:text-black font-header font-extrabold text-2xl capitalize inline-block align-middle py-3 pr-4 pl-2"
              href="/"
            >
              Flying Fig Farm
            </Link>

            <ul className="inline-block relative list-none m-0 p-0 print:hidden">
              <li className="inline-block relative align-middle p-0 m-0 h-full">
                <Link href="/" className=" text-white font-bold px-5">
                  Home
                </Link>
              </li>
              <li className="inline-block relative align-middle p-0 m-0 h-full invisible md:visible">
                <a href="/plants/native" className="text-white font-bold px-5">
                  Native Plants
                </a>
              </li>
              <li className="inline-block relative align-middle p-0 m-0 h-full invisible md:visible">
                <a href="/plants/edible" className="text-white font-bold px-5">
                  Edible Plants
                </a>
              </li>
              <li className="inline-block relative align-middle p-0 m-0 h-full invisible md:visible">
                <a href="/plants/pond" className="text-white font-bold px-5">
                  Pond Plants
                </a>
              </li>
            </ul>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
