import MenuTemplate from "@/app/modules/menu/template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Munchys brunch",
  description: "Echa un vistazo a nuestra carta.",
};

export default function Menu() {
  return <MenuTemplate />;
}
