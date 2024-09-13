
import "./globals.css";


export const metadata = {
  title: "MAD",
  description: "Originated as an idea",
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
