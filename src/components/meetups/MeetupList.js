import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

const MeetupList = (prpos) => {
  return (
    <ul className={classes.list}>
      {prpos.meetups.map((meetup) => {
        return (
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            address={meetup.address}
            description={meetup.description}
          />
        );
      })}
    </ul>
  );
};

export default MeetupList;
