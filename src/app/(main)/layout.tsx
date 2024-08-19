import Footer from "../modules/layout/footer";
import Nav from "../modules/layout/nav";

export default async function PageLayout(props: { children: React.ReactNode }) {
  return (
    <div className="font-roboto">
      <Nav />
      <main >{props.children}</main>
      <Footer />
    </div>
  );
}
