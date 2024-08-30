import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { CssBaseline } from "@mui/material";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Sensasi POS",
	description: "Sensasi POS adalah aplikasi kasir yang mudah digunakan.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</head>
			<CssBaseline />
			<body>{children}</body>
		</html>
	);
}
