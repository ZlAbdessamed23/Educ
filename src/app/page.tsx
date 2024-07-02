import { Link ,Button } from "@nextui-org/react";
import { offers } from "./types/constants";

export default function Home() {
  return (
    <div className="grid grid-cols-2 w-2/4 mx-auto gap-12 justify-center items-center h-screen ">
      {offers.map((offer) => (
        <section key={offer.title} className="offer-section bg-gray-950 border border-secondary-500 shadow-md shadow-primary-500 p-6 rounded-md">
          <span>
            <h2 className="text-2xl font-semibold text-secondary-500 text-center">{offer.title}</h2>
            <h3 className="text-xl font-semibold text-primary-500 text-center">{offer.price}</h3>

          </span>
          <span className="flex flex-col gap-2 items-start">
            {
              offer.pros.map((pro) => (
                <p key={pro}>- {pro}</p>
              ))
            }
          </span>
          <Button
            href={`/register?offer=${offer.title}`}
            as={Link}
            color="secondary"
            showAnchorIcon
            variant="shadow"
          >
            Get Started
          </Button>
        </section>
      ))}
    </div>
  );
}
