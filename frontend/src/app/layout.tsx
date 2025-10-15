import "./globals.css";

// export const metadata = {
//   title: "Mon association",
//   description: "Site officiel de l’association",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head />
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
