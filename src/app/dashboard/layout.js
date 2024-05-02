import { Inter } from "next/font/google";
import Sliderbar from '@/components/Sliderbar';

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} flex relative`}>
        <div className="flex-1 relative z-10">
          {children}
        </div>
        <div className="absolute inset-y-0 left-0 z-20">
          <Sliderbar />
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
