import AboutTemplate from "@/app/modules/about/template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Munchys brunch",
  description: "Sobre nosotros.",
};

export default function About() {
  return <AboutTemplate />;
}
