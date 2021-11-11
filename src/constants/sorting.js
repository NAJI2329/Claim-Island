export const SORT_ORDER_CLAMS_KEY = "sortOrderClams";
export const SORT_ORDER_PEARLS_KEY = "sortOrderPearls";

export const SORT_ORDERS = {
  asc: "asc",
  desc: "desc",
};

export const SORT_CLAMS_OPTIONS = {
  id: "id",
  rarity: "rarity",
  pearls: "pearls",
  shape: "shape",
  colour: "colour",
};

export const SORT_PEARLS_OPTIONS = {
  id: "id",
  rarity: "rarity",
  shape: "shape",
  grading: "grading",
  colour: "colour",
  boost: "boost",
};

export const CLAMS_SORT_BUTTONS = [
  {
    value: SORT_CLAMS_OPTIONS.id,
    displayValue: "ID#",
  },
  {
    value: SORT_CLAMS_OPTIONS.rarity,
    displayValue: "Rarity Tier",
  },
  {
    value: SORT_CLAMS_OPTIONS.pearls,
    displayValue: "Pearls Remaining",
  },
  {
    value: SORT_CLAMS_OPTIONS.shape,
    displayValue: "Shape",
  },
  {
    value: SORT_CLAMS_OPTIONS.colour,
    displayValue: "Colour",
  },
];

export const PEARLS_SORT_BUTTONS = [
  {
    value: SORT_PEARLS_OPTIONS.id,
    displayValue: "ID#",
  },
  {
    value: SORT_PEARLS_OPTIONS.rarity,
    displayValue: "Rarity Tier",
  },
  {
    value: SORT_PEARLS_OPTIONS.shape,
    displayValue: "Shape",
  },
  {
    value: SORT_PEARLS_OPTIONS.colour,
    displayValue: "Body colour",
  },
  {
    value: SORT_PEARLS_OPTIONS.grading,
    displayValue: "Grading",
  },
  {
    value: SORT_PEARLS_OPTIONS.boost,
    displayValue: "GEM Boost",
  },
];
