import type { Metadata } from 'next';

import './globals.css';

import { ThemeProvider } from '@/components/theme-provider';
import toast, { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'SureServe',
  description:
    'A trusted platform connecting verified artisans with homeowners for reliable home services and maintenance.',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
