import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans_SC({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
	title: "DMS",
	description: "",
	icons: "",   
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="zh-cn">
			<body className={noto.className}>{children}</body>
		</html>
	);
}
