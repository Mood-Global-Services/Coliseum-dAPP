import {
    Box,
    Typography,
    Stack,
    Link
} from "@mui/material";
import {
    Twitter
} from "@mui/icons-material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() {
    return (
        <Box component="footer" sx={{ py: 5 }}>
            <Stack
                direction="row"
                justifyContent="center"
                spacing={4}
                sx={{ mb: 5 }}
            >
                <Link
                    sx={{ textDecoration: "none" }}
                    href="https://twitter.com/arb_direct"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Twitter fontSize="large" htmlColor="white" />
                </Link>
                <Link
                    sx={{ textDecoration: "none" }}
                    href="https://twitter.com/arb_direct"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GitHubIcon fontSize="large" htmlColor="white" />
                </Link>
                <Link
                    sx={{ textDecoration: "none" }}
                    href="https://twitter.com/arb_direct"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LinkedInIcon fontSize="large" htmlColor="white" />
                </Link>
                <Link
                    sx={{ textDecoration: "none" }}
                    href="https://twitter.com/arb_direct"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FacebookIcon fontSize="large" htmlColor="white" />
                </Link>
            </Stack>
           
        </Box>
    );
}