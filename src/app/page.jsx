import Image from "next/image";

export default function Home() {
  return (
    <div className="heroSection">
      <h1 className="title">
        Welcome to Norwich Diocesan Evangelical Fellowship
      </h1>
      <span className="ndefDes">
        A network of Anglican Evangelical churches in Norfolk, England united by
        faith, love, and a commitment to share the good news and serving our
        communities.
      </span>
      <Image
        src="/nrcathedral.jpeg"
        width={1000}
        height={400}
        alt="the Norwich Cathedral"
      />
    </div>
  );
}
