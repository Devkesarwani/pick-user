import React, { useState, useEffect, useRef, ChangeEvent, KeyboardEvent } from "react";
import Chip from "./Chip";
import ListItem from "./ListItem";
import { Item, items } from "./items"


const Task: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [chips, setChips] = useState<Item[]>([]);
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    if (value === "") {
      setFilteredItems(
        items.filter((item) => !chips.some((chip) => chip.name === item.name))
      );
    } else {
      const filtered = items.filter(
        (item) =>
          !chips.some((chip) => chip.name === item.name) &&
          item.name.toLowerCase().includes(value.toLowerCase())
      );

      setFilteredItems(filtered);
    }
  };

  const handleItemClick = (item: Item) => {
    setChips([...chips, item]);
    setFilteredItems(filteredItems.filter((i) => i !== item));
    setInputValue("");
  };

  const handleChipRemove = (chip: Item) => {
    setChips(chips.filter((item) => item !== chip));
    setFilteredItems([...filteredItems, chip]);
  };

  const handleBackspace = () => {
    if (inputValue === "" && chips.length > 0) {
      const lastChip = chips[chips.length - 1];
      handleChipRemove(lastChip);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [chips]);

  const handleInputClick = () => {
    setFilteredItems(
      items.filter((item) => !chips.some((chip) => chip.name === item.name))
    );
  };

  return (
    <div className="p-16 mb-10">
<h1 className="text-center mb-10  text-yellow-400 font-semibold text-4xl">Choose User</h1>
        <div className="flex flex-wrap  w-auto bg-white p-2 rounded-md border-b-4 border-yellow-600">
          <div className="flex flex-wrap overflow-hidden">
            {chips.map((chip) => (
              <Chip key={chip.name} avatar={chip.name} chip={chip} onRemove={handleChipRemove} />
            ))}
          </div>

          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onClick={handleInputClick}
            onChange={handleInputChange}
            onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
              e.key === "Backspace" && handleBackspace()
            }
            className="outline-none appearance-none w-full px-2 py-1"
          />
        </div>
        <div className="m-6">
        <ul className="px-5 max-h-80 overflow-y-auto">
          {filteredItems.map((item) => (
            <ListItem key={item.name}  item={item} onItemClick={handleItemClick} />
          ))}
        </ul>
        </div>
    </div>
  );
};

export default Task;
