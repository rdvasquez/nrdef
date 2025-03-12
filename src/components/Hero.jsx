import Image from "next/image";
import "./Hero.css";

export default function heroSection() {
  return (
    <div className="hero-container">
      <div className="main-content">
        <h1>Welcome to Norwich Diocesan Evangelical Fellowship!</h1>
        <p className="intro">
          We are a network of Anglican Evangelical churches in Norfolk, England
          united by faith, love, and a commitment to share the good news and
          serving our communities.
        </p>
        <Image
          className="faith-image"
          src="/faith.png"
          width={600}
          height={250}
          alt="Our Statement of Faith"
        />
        <div className="Faith"></div>
        <h3 className="Statement-of-Faith">View our Statement of Faith</h3>
      </div>
      <div className="image-container">
        <Image
          className="image-overlay"
          src="/feet.png"
          width={480}
          height={300}
          alt="The Great Commission."
        />
        <div className="text-overlay">
          <h2 className="content1">
            The Great Commission Through Faith and Fellowship
          </h2>
          <span className="content2">
            We are united in the teachings of our Lord Jesus Christ and hold
            fast to the authority of the Holy Bible. Our fellowship is steadfast
            in faith, actively reaching out to our communities to serve with
            love and compassion, living out the call to be salt and light in the
            world.
          </span>
        </div>
        <div className="image-right"></div>
        <Image
          className="hero-image"
          src="/nrcathedral.jpeg"
          width={480}
          height={300}
          alt="The Norwich Cathedral."
        />
        <Image
          className="bible-study"
          src="/BibleStudy.png"
          width={480}
          height={300}
          alt="Bible Study Group"
        />
      </div>
    </div>
  );
}
