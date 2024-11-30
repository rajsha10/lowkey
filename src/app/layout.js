import "./globals.css";

export const metadata = {
  title: "LowKey",
  description: "An NFT MarketPlace on EDU Chain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
