/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next";
import HomeTemplate from "../modules/home/template";

export const metadata: Metadata = {
  title: "Munchys brunch",
  description: "Desayunos, brunch y mucho más.",
};

export default function Home() {
  return <HomeTemplate />;
}
