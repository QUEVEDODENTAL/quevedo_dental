import { Inter } from "next/font/google";
import Sliderbar from '@/components/Sliderbar';

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} flex h-screen`}>
        <div className="flex-none">
          <Sliderbar />
        </div>
        <div className="flex-1 flex justify-center items-center">
          {children}
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
