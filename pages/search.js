import React from "react";
import { useRouter } from "next/dist/client/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InfoCards from "../components/InfoCards";
import { format, parseISO } from "date-fns";
function search({ searchResults }) {
  const router = useRouter();
  console.log(searchResults);
  const { location, startDate, endDate, noOfGuests } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <div className="flex">
        <section className="flex-grow pt-14 md:px-16 px-5">
          <p className="text-xs">
            300+ Stays - {range} - for {noOfGuests} Guests
          </p>
          <h1 className="text-3xl font-bold mt-2 mb-6">Stays in {location}</h1>
          <div className="hidden lg:inline-flex hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults.map(
              (
                { img, location, title, description, star, price, total },
                index
              ) => (
                <InfoCards
                  key={index}
                  title={title}
                  img={img}
                  location={location}
                  desc={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default search;
export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}