import Image from "next/image";
import "./page.module.css";
import Footer from "@/components/Footer";

export default function heroSection() {
  return (
    <div className="heroSection">
      <div></div>
      <div>
        <h1>Welcome to Norwich Diocesan Evangelical Fellowship</h1>
        <article>
          A network of Anglican Evangelical churches in Norfolk, England united
          by faith, love, and a commitment to share the good news and serving
          our communities.
        </article>
      </div>
      <Image
        src="/nrcathedral.jpeg"
        width={1000}
        height={400}
        alt="the Norwich Cathedral"
      />
      <Footer />
    </div>
  );
}
