import "./page.module.css";
import Footer from "@/components/Footer";

export default function heroSection() {
  return (
    <div className="heroSection">
      <div></div>
      <div>
        <h1>Welcome to Norwich Diocesan Evangelical Fellowship</h1>
        <p>
          A network of Anglican Evangelical churches in Norfolk, England united
          by faith, love,{" "}
          <span>
            and a commitment to share the good news and serving our communities.
          </span>
        </p>
      </div>
      <Footer />
    </div>
  );
}
