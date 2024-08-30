import { Alert, Box, Button, Container, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Home() {
	return (
		<Container
			component="main"
			maxWidth="sm"
			sx={{
				height: "100dvh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				gap: 2,
			}}
		>
			<Typography variant="h2" component="h1" fontWeight="bold">
				Sensasi POS
			</Typography>

			<Alert severity="warning" variant="filled">
				Aplikasi masih dalam tahap pengembangan.
			</Alert>

			<Typography variant="body1" component="p">
				Sensasi POS adalah aplikasi Point of Sale (POS) berbasis web yang
				dirancang untuk membantu Anda mengelola transaksi bisnis dengan mudah
				dan efisien.
			</Typography>

			<Button
				startIcon={<GitHubIcon fontSize="inherit" />}
				size="small"
				href="https://github.com/sensasi-apps/sensasi-pos"
				target="_blank"
			>
				GitHub
			</Button>
		</Container>
	);
}
