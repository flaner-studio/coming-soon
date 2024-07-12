import { Just_Me_Again_Down_Here as JustMeFont } from "next/font/google";

const justMe = JustMeFont({
  subsets: ["latin"],
  weight: "400", // This font only comes in 400 weight
  variable: "--font-just-me",
});

export const fonts = {
  justMe,
};
