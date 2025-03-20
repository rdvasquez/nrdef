import Image from "next/image";

export default function ResourcesPage() {
  return (
    <div className="resources-container">
      <div>
        <h1 className="community">What we do for the community?</h1>
        <div className="outreachimage">
          <figure className="outreach">
            <Image
              className="outreach"
              src="/outreach.png"
              width={300}
              height={200}
              alt="youth outreach"
            />
            <figcaption className="caption">Youth Outreach Program</figcaption>
          </figure>

          <figure className="outreach1">
            <Image
              className="outreach1"
              src="/outreach1.png"
              width={300}
              height={200}
              alt="community outreach"
            />
            <figcaption className="caption">
              Community Outreach Activities
            </figcaption>
          </figure>

          <figure className="outreach2">
            <Image
              className="outreach3"
              src="/outreach3.png"
              width={300}
              height={200}
              alt="donation"
            />
            <figcaption className="caption">
              Donation Drives for Those in Need
            </figcaption>
          </figure>
        </div>
        <span className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          convallis mauris vel mi elementum, ac vestibulum nulla sagittis.
          Integer in neque nec nisl tincidunt luctus. Vivamus viverra sem ac
          orci vestibulum, in pharetra ante sollicitudin. Curabitur vitae dolor
          nec lorem tincidunt malesuada. Ut sit amet ullamcorper nisi. Fusce
          tincidunt eros at dui tincidunt, sit amet pretium ex mollis.
          Suspendisse potenti. Proin viverra nisi non libero scelerisque, at
          fermentum ligula ullamcorper.
        </span>
      </div>
    </div>
  );
}
