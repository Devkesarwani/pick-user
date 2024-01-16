// ListItem.tsx
import React from "react";
import { Item } from "./items";

interface ListItemProps {
  item: Item;
  onItemClick: (item: Item) => void;
}

const ListItem: React.FC<ListItemProps> = ({ item, onItemClick }) => (
  <li key={item.name}
    className="mb-3 p-2 border-yellow-600 border bg-yellow-200 bg-opacity-80 rounded-md cursor-pointer"
    onClick={() => onItemClick(item)}
  >
    <div className="flex items-center">
      <img src={`https://api.multiavatar.com/${item.name}.png?apikey=8arK5tETGS0wF9`} alt="profile-logo" className="w-8 h-8 rounded-full mr-4 shadow-lg border-yellow-700 border" />
      <div>
        <p className="text-lg text-black font-semibold">{item.name}</p>
        <p className=" text-slate-800 text-base italic">{item.email}</p>
      </div>
    </div>
  </li>
);

export default ListItem;
