import Image from "next/image";
import "./page.module.css";

export default function heroSection() {
  return (
    <div className="heroSection">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          textAlign: "left",
          maxWidth: "1000px",
          gap: "20px",
          marginLeft: "10px",
        }}
      >
        <h1 style={{ fontSize: "42px", fontWeight: "semi-bold" }}>
          Welcome to Norwich Diocesan Evangelical Fellowship
        </h1>
        <span style={{ fontSize: "24px", color: "#555" }}>
          A network of Anglican Evangelical churches in Norfolk, England united
          by faith, love, and a commitment to share the good news and serving
          our communities.
        </span>
      </div>
      <Image
        src="/nrcathedral.jpeg"
        width={1000}
        height={400}
        alt="the Norwich Cathedral"
      />
    </div>
  );
}
