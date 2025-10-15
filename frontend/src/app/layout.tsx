import "./globals.css";

export const metadata = {
  title: "Mon association",
  description: "Site officiel de l’association",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head />
      <body className="font-sans bg-gray-50 text-gray-900">
        {/* 🔗 NAVBAR IMPORTÉE */}

        <main className="min-h-[80vh]">{children}</main>

        <footer className="text-center text-sm text-gray-500 py-6 border-t">
          © {new Date().getFullYear()} Mon Asso — Tous droits réservés
        </footer>
      </body>
    </html>
  );
}
