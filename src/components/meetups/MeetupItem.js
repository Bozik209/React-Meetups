import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

const MeetupItem = (prpos) => {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(prpos.id);

  function toggleFavoritesStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(prpos.id);
    } else {
      favoritesCtx.addFavorite({
        id: prpos.id,
        title: prpos.title,
        description: prpos.description,
        image: prpos.image,
        address: prpos.address,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={prpos.image} alt={prpos.title}></img>
        </div>
        <div className={classes.content}>
          <h3>{prpos.title}</h3>
          <address>{prpos.address}</address>
          <p>{prpos.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoritesStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
