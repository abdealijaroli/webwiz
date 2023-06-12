import "./globals.css";

export const metadata = {
    title: "WebWiz - AI powered Web Designer",
    description: "Your AI powered Web Designer.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
