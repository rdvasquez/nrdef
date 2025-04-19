import Image from "next/image";
import "./Hero.css";
import Link from "next/link";
import Contact from "./Contact";

export default function heroSection() {
  return (
    <div className="hero-container">
      <h1 className="title">The Norwich Diocesan Evangelical Fellowship</h1>
      <p className="text">
        A network of around 20 evangelical Anglican churches in Norfolk and the
        Waveney Valley united by faith, love, and a commitment to sharing the
        good news in our communities.
      </p>
      <Image
        className="faith-image"
        src="/faith.png"
        width={600}
        height={300}
        alt="Our Statement of Faith"
      />
      <Link className="Statement-of-Faith" href="#" target="_blank">
        View our Statement of Faith
      </Link>
      <Image
        className="image-overlay"
        src="/feet.png"
        width={580}
        height={300}
        alt="The Great Commission."
      />
      <article className="text-overlay">
        <h2 className="content1">
          Furthering the Great Commission through faith and fellowship
        </h2>
        <p className="content2">
          We are united in the teachings of our Lord Jesus Christ and hold fast
          to the authority of the Holy Bible. Our fellowship is steadfast in
          faith, actively reaching out to our communities to serve with love and
          compassion, living out the call to be salt and light in the world.
        </p>
      </article>
      <Image
        className="hero-image"
        src="/nrcathedral.jpeg"
        width={550}
        height={300}
        alt="The Norwich Cathedral."
      />
      <div className="GetInTouch">
        <Contact />
      </div>
      <Image
        className="bible-study"
        src="/BibleStudy.png"
        width={550}
        height={300}
        alt="Bible Study Group"
      />
    </div>
  );
}
