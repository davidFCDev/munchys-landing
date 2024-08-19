
import ContactTemplate from "@/app/modules/contact/template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Munchys brunch",
  description: "Contacta con nosotros.",
};

export default function Contact() {
  return <ContactTemplate />;
}
