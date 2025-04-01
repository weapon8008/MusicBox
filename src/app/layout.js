import "./globals.css";
export const metadata = {
  title: "Personal Music Instrument Player",
  description: "Create your own music",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
