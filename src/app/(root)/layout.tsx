export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* navbar here  */}
      <span>Add Navbar here</span>
      {children}
    </>
  );
}
