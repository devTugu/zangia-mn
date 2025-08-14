import type { Metadata } from "next";

import Header from "@/components/section/Header";
import Footer from "@/components/section/Footer";

// Энэ layout-ыг ашиглаж буй бүх хуудасны SEO-д зориулсан metadata тодорхойлж байна
export const metadata: Metadata = {
  title: "Zangia",
  description: "Даалгавар",
};

/**
 * MainLayout компонент нь home хэсгийн бүх хуудсыг бүрхэж өгнө
 *
 * @param {Object} props - Компонентийн property-ууд
 * @param {React.ReactNode} props.children - Layout дотор байрших хүүхэд компонентүүд
 * @returns {JSX.Element} Header, контент хэсэг, Footer-оос бүрдэх үндсэн бүтэц
 */
export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Хуудасны толгой хэсэг */}
      <Header />
      {/* Контент хэсэг, хамгийн багадаа дэлгэцийн өндрийг эзэлнэ */}
      <div className="flex flex-col min-h-screen">{children}</div>
      {/* Хуудасны хөл хэсэг */}
      <Footer />
    </>
  );
}
