import './globals.css';
export const metadata = { title: 'Mini Shop', description: 'DevResolve intentionally buggy demo app' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
