import React from "react";
// My imports.
import type Drink from "../../models/Drink";
import FetchItems from "../../store/fetcher/fetch-items";
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import DrinkItemList from "./DrinkItem/DrinkItemList";
// CSS import.
import styles from "./AvailableDrinks.module.css";

const AvailableDrinks = () => {
  const drinkArray: Drink[] = [];
  const { items, isLoading, isError } = FetchItems(
    "/api/menu/drinks",
    drinkArray
  );

  if (isError) {
    // Display server error if we had an error connecting to our server.
    return (
      <section className={styles.drinksError}>
        <Card>
          <h3>{isError.message}</h3>
        </Card>
      </section>
    );
  }
  if (isLoading) {
    // Display loading content since we do not have our data yet.
    return (
      <section className={styles.drinksLoading}>
        <Card>
          <p>Loading...</p>
          <LoadingSpinner />
        </Card>
      </section>
    );
  }
  // Display the list of drinks.
  return (
    <section className={styles.drinks}>
      <Card>
        {items ? (
          <DrinkItemList drinks={items} />
        ) : (
          <section className={styles.drinksError}>
            <h3>Could not fetch menu items</h3>
          </section>
        )}
      </Card>
    </section>
  );
};

export default AvailableDrinks;