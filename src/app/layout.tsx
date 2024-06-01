"use client";
import "./globals.css";
import { CssBaseline, ThemeProvider, Container } from "@mui/material";

import { useMemo } from "react";
import useTheme from "@/styles/theme/useTheme";
import { darkTheme, lightTheme } from "@/styles/theme/themes";
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const theme = useTheme((state: { theme: string | null}) => state.theme);
	const selectedTheme = useMemo(() => {
		return theme === "light" ? lightTheme : darkTheme;
	}, [theme]);
	return (
		<html lang='en'>
			<head />
			<ThemeProvider theme={selectedTheme}>
				<body>
					<Container>{children}</Container>
					<CssBaseline />
				</body>
			</ThemeProvider>
		</html>
	);
}
