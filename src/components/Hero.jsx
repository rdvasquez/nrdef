import Image from "next/image";
import "./Hero.css";

export default function heroSection() {
  return (
    <div className="container">
      <div className="left">
        <h1>Welcome to Norwich Diocesan Evangelical Fellowship!</h1>
        <p className="intro">
          We are a network of Anglican Evangelical churches in Norfolk, England
          united by faith, love, and a commitment to share the good news and
          serving our communities.
        </p>
      </div>
      <div className="right">
        <h2 className="content1">
          The Great Commission Through Faith and Fellowship
        </h2>
        <span className="content2">
          We are united in the teachings of our Lord Jesus Christ and hold fast
          to the authority of the Holy Bible. Our fellowship is steadfast in
          faith, actively reaching out to our communities to serve with love and
          compassion, living out the call to be salt and light in the world.
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
            neque vitae nisl ultricies dapibus. Ut nec placerat metus. Vivamus
            volutpat, nulla id dapibus gravida, nunc justo ullamcorper odio, nec
            convallis odio erat at risus. Donec id dui ex. Proin sollicitudin
            dui vel libero luctus, in cursus tortor pharetra.;
          </p>
        </span>

        <Image
          className="hero-image"
          src="/fellowship.png"
          width={460}
          height={250}
          alt="The Great Commission Through Faith and Fellowship."
        />
      </div>
    </div>
  );
}
