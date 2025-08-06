// app/layout.tsx (Next.js App Router)
import "./globals.css";
import { ReactNode } from "react";
import Script from "next/script";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi">
      {/* <head>
        <title>ndson</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@mdi/font@7.0.96/css/materialdesignicons.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Be+Vietnam+Pro:wght@300;400;500;600;700&display=swap&subset=vietnamese"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github.min.css"
        />
      </head> */}
      <body>
        {/* <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/markdown-it/dist/markdown-it.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/dompurify@2.4.0/dist/purify.min.js"
          strategy="beforeInteractive"
        /> */}

        {children}
      </body>
    </html>
  );
}
