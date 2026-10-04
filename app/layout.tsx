export const metadata = {
  title: 'Jassmine Nails',
  description: 'Sitio web para salón de uñas y reservas online',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
