import Navbar from "@/components/navbar/Navbar";

//lrc es el atajo
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <h1>Hello Root Layout General</h1>
      {children}
    </div>
  );
}
