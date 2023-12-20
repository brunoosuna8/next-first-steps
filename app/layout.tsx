import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
//configura la fuente que viene por defecto
import { Montserrat } from "next/font/google";
const inter = Montserrat({ subsets: ["latin"] });
// metadata: metadata es lo que va a leer google para hacer el SEO de nuestra pagina , si no existe esta variable , lo va a sacar del RootLayout. Se puede y se debe agregar un metadata con el atajo de "mr" y enter, y escribir la descripcion y el titulo a cada page
export const metadata: Metadata = {
  title: "Bruno First Next App",
  description: "Generated Bruno Osuna",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
