import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetUpsPage = () => {
  const [isLoading, serIsLoading] = useState(true);
  const [loadedMeetup, seLoadedMeetup] = useState([]);

  useEffect(() => {
    serIsLoading(true);
    fetch("https://react-meetup-9a0ef-default-rtdb.firebaseio.com/mettups.json")
      .then((response) => response.json())
      .then((data) => {
        serIsLoading(false);
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        seLoadedMeetup(meetups.reverse());
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <h2>Loading...</h2>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetup} />
    </section>
  );
};

export default AllMeetUpsPage;
