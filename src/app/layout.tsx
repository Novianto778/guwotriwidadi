import { Metadata } from "next";
import { Modern_Antiqua, Quicksand } from "next/font/google";
import ClientNavbar from "../components/ClientNavbar";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
});

const modern_antiqua = Modern_Antiqua({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-antiqua",
});

export const metadata: Metadata = {
  title: "Guwo Triwidadi",
  description: `Guwo Triwidadi adalah sebuah dusun di Kalurahan Triwidadi, Kapanewon Pajangan, Kabupaten Bantul, Daerah Istimewa Yogyakarta, Indonesia. Dusun ini terletak di sebelah barat daya Kapanewon Pajangan, berbatasan dengan Dusun Sumbermulyo di sebelah barat, Dusun Sumberagung di sebelah timur, Dusun Sumbermulyo di sebelah utara, dan Dusun Sumberagung di sebelah selatan.`,
  keywords: [
    "guwo triwidadi",
    "guwo",
    "triwidadi",
    "dusun",
    "dusun guwo triwidadi",
    "dusun guwo",
  ],
  metadataBase: new URL("https://guwotriwidadi.my.id"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: "/og-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${modern_antiqua.variable} ${quicksand.variable} font-sans`}
    >
      <body className="font-quicksand font-medium">
        <ClientNavbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
