import GalleryTemplate from "@/app/modules/gallery/template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Munchys brunch",
  description: "Echa un vistazo a nuestras imágenes.",
};

export default function Menu() {
  return <GalleryTemplate />;
}
