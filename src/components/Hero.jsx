import Image from "next/image";

export default function heroSection() {
  return (
    <div className="heroSection">
      <div>
        <h1>Welcome to Norwich Diocesan Evangelical Fellowship</h1>
        <p>
          We are a network of Anglican Evangelical churches in Norfolk, England{" "}
          <br />
          united by faith, love, and a commitment to share the good news and{" "}
          <br />
          serving our communities.
        </p>

        <Image
          className="heroImage"
          src="/faith.png"
          width={500}
          height={250}
          objectFit="cover"
          alt="statement of faith"
        />
      </div>
    </div>
  );
}
