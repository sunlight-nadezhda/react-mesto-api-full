import React from "react";

export const CardsContext = React.createContext({
  cards: [],
  fetchCards: () => {},
});