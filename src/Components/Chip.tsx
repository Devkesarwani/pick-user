// Chip.tsx
import React from "react";
import { RxCross2 } from "react-icons/rx";
import { Item } from "./items";

interface ChipProps {
  chip: Item;
  avatar: string;
  onRemove: (chip: Item) => void;
}

const Chip: React.FC<ChipProps> = ({ chip,avatar, onRemove }) => (
  <div className="bg-yellow-200 bg-opacity-80 rounded-xl p-1 m-1 flex border border-yellow-500">
    <img src={`https://api.multiavatar.com/${avatar}.png?apikey=8arK5tETGS0wF9`} alt="profile-logo" className="w-6 h-6 rounded-full mr-2 shadow-lg border-yellow-700 border" />
    {chip.name}
    <RxCross2 className="h-7 w-10 text-yellow-800 ml-1 pb-1 cursor-pointer" onClick={() => onRemove(chip)} />
  </div>
);

export default Chip;
