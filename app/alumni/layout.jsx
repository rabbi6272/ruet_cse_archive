export const metadata = {
  title: "CSE Alumni Map",
  description: "A map of CSE Alumnis around the world",
};

export default function AlumniLayout({ children }) {
  return (
    <html lang="en">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <body>{children}</body>
    </html>
  );
}
