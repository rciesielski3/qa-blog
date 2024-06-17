import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./styles/globals.css";

const lora = Lora({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QA Blog ",
  description:
    "Blog for Qality Assurance engineers make in Next.js by Rafal Ciesielski",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lora.className}>{children}</body>
    </html>
  );
}
