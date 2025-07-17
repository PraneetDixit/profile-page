import "./globals.css";
import ParticleContainer from "../components/ParticleContainer/ParticleContainer";
import { Roboto } from "next/font/google";
import { ImageProvider } from "@/context/ImageContext";
import SideBar from "@/components/SideBar/SideBar";
import Dialog from "@/components/Dialog/Dialog";

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-roboto",
});

export const metadata = {
    title: "Profile",
    description: "National Students' Space Challenge",
};

export default function RootLayout({ children }) {
    return (
        <ImageProvider>
        <html lang="en" className={roboto.variable}>
            <body className={roboto.className}>
                <ParticleContainer>
                    <nav></nav>
                    <div id="container">
                        <SideBar/>
                        {children}
                    </div>
                </ParticleContainer>
                <Dialog/>
            </body>
        </html>
        </ImageProvider>
    );
}
