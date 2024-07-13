import { fonts } from "./font";
import { Provider } from "./provider";
export const metadata = {
  title: "flâner.studio",
  description: "A creative studio focusing on both digital & physical proucts",
  author: "flâner.studio",
  keywords: [
    "flâner",
    "creative studio",
    "digital products",
    "physical products",
  ],

  openGraph: {
    title: "flâner.studio",
    description:
      "A creative studio focusing on both digital & physical products",
    url: "https://flaner.studio",
    siteName: "flâner.studio",
    images: [
      {
        url: "https://flaner.studio/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "flâner.studio logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/assets/favicon-196x196.png",
        sizes: "196x196",
        type: "image/png",
      },
      {
        url: "/assets/favicon-128x128.png",
        sizes: "128x128",
        type: "image/png",
      },
      { url: "/assets/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      {
        url: "/assets/apple-touch-icon-180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        url: "/assets/apple-touch-icon-167x167.png",
        sizes: "167x167",
        type: "image/png",
      },
      {
        url: "/assets/apple-touch-icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
      },
      {
        url: "/assets/apple-touch-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        url: "/assets/apple-touch-icon-120x120.png",
        sizes: "120x120",
        type: "image/png",
      },
      {
        url: "/assets/apple-touch-icon-114x114.png",
        sizes: "114x114",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fonts.justMe.variable}>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
