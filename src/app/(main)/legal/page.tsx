import LegalTemplate from "@/app/modules/legal/template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Munchys brunch",
  description: "Aviso legal y política de privacidad.",
};

export default function Menu() {
  return <LegalTemplate />;
}
