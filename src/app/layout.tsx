import type { Metadata } from "next";
import BottomNav from "./_component/BottomNav";
import MSWProvider from "./_component/MSWProvider";
import RQProvider from "./_component/RQProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <body>
        <MSWProvider />
        <RQProvider>
          <main>
            {children}
            <BottomNav />
          </main>
        </RQProvider>
      </body>
    </html>
  );
};

export default RootLayout;
