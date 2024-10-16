import { EntryHall } from "./entry_hall.mjs";

new EntryHall()
  .entryBathroom()
  .washHands()
  .goBackToEntryHall()
  .entryBathroom()
  .goBackToEntryHall()
  .entryBathroom()
  .goBackToEntryHall()
  .askReceptionistQuestion("Jak se mate?")
  .entryBathroom();
