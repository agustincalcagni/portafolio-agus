import type { Metadata } from "next";
import { Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import LinksItems from "./components/LinksItems";

export const metadata: Metadata = {
  title: "Portafolio Agustín Calcagni",
  description:
    "Data Analyst - BI Analyst | SQL | Snowflake | QlikSense | Microsoft Excel",
};

const shareTechMono = Share_Tech_Mono({
  weight: ["400"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${shareTechMono.className} antialiased`}>
        <main className="w-full flex flex-col h-[100dvh] p-3 bg-[#E9E6DE] dark:bg-[#181818]">
          {/* Header */}
          <header className="w-full h-auto md:h-14 border border-zinc-300/70 dark:border-zinc-700/30 rounded-lg bg-[#FAFAFA] dark:bg-zinc-800/50 flex flex-col md:flex-row justify-between items-center px-3 py-2 md:py-0 z-50">
            <div className="flex items-center gap-2">
                <svg
                  className="inline-flex -translate-y-1"
                  width="28"
                  height="28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.667 12c1.333 1.414 2 3.192 2 5.334 0 4.62-4.934 5.7-7.334 12C18.444 28.567 18 27.456 18 26c0-4.642 6.667-7.053 6.667-14Zm-5.334-5.333c1.6 1.65 2.4 3.43 2.4 5.333 0 6.602-8.06 7.59-6.4 17.334C13.111 27.787 12 25.564 12 22.666c0-4.434 7.333-8 7.333-16Zm-6-5.333C15.111 3.555 16 5.556 16 7.333c0 8.333-11.333 10.962-5.333 22-3.488-.774-6-4-6-8 0-8.667 8.666-10 8.666-20Z"
                    fill="#FF7759"
                  ></path>
                </svg>
                <h3 className="text-[1.3rem] text-zinc-700 dark:text-zinc-200">
                  AG
                </h3>

              <p className="text-xl text-font-second-color font-extralight">
                Portfolio
              </p>
            </div>
            <div className="flex text-black gap-4 items-center">
              <LinksItems className="gap-4 uppercase" />
            </div>
          </header>

          {/* Content */}
          <div className="flex flex-1 flex-col md:flex-row mt-3 gap-2 overflow-hidden text-black">
            {/* Sidebar */}
            <aside className="hidden md:flex md:flex-col w-full md:w-[260px] dark:text-zinc-200 border border-zinc-300/70 dark:border-zinc-700/30 rounded-lg bg-[#FAFAFA] dark:bg-zinc-800/50 overflow-y-auto p-3">
              <p className="flex items-center gap-2 font-semibold my-4 text-lg">
                <span className="w-2 h-2 rounded-full bg-[#FF7759]" />
                Menú
              </p>
              <div>
                <LinksItems className="flex-col space-y-4 capitalize"
                />
              </div>
            </aside>

            {/* Main area */}
            <div className="flex-1 border border-zinc-300/70 dark:border-zinc-700/30 rounded-lg bg-[#FAFAFA] dark:bg-zinc-800/50 relative overflow-y-auto children-page">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
