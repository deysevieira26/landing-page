import Footer from "./components/Footer";
import Header from "./components/Header";
import './globals.css'


<<<<<<< HEAD

=======
>>>>>>> 6a8b5a35deb6e330a9bbb02f9eaa1a18c454448d
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Landing Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
<<<<<<< HEAD
}

=======
}
>>>>>>> 6a8b5a35deb6e330a9bbb02f9eaa1a18c454448d
