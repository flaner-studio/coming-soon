import {
  Just_Me_Again_Down_Here as JustMeFont,
  Montserrat,
} from "next/font/google";

const justMe = JustMeFont({
  subsets: ["latin"],
  weight: "400", // This font only comes in 400 weight
  variable: "--font-just-me",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // This font only comes in 400 weight
  variable: "--font-montserrat",
});

export const fonts = {
  justMe,
  montserrat,
};
