import { fonts } from "./font";
import { Provider } from "./provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fonts.justMe.variable}>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
