import localFont from "next/font/local";
import "./globals.css";
import { League_Spartan } from "next/font/google";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-league-spartan",
});

const chab = localFont({
  src: [
    {
      path: "./fonts/chab.woff2",
      style: "normal",
      display: "swap",
    },
  ],
  variable: "--font-chab",
});

const sequentialist = localFont({
  src: [
    {
      path: "./fonts/sequentialistbb-bold-italic.woff2",
      style: "normal",
      display: "swap",
    },
  ],
  variable: "--font-sequentialist",
});

export const metadata = {
  title: "이지현 | 프론트엔드 개발자",
  description: "프론트엔드 개발자 이지현",
  icons: {
    icon: "/Favicon/favicon.ico",
    shortcut: "/Favicon/favicon-16x16.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://cdn.boxicons.com/fonts/basic/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.boxicons.com/fonts/brands/boxicons-brands.min.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${sequentialist.variable}  ${pretendard.variable} ${chab.variable} ${leagueSpartan.variable} antialiased bg-[url('https://ewqfysoxkdbxiitjyrgr.supabase.co/storage/v1/object/public/portfolio/Img/Gradient.png')]`}
      >
        {children}
      </body>
    </html>
  );
}
