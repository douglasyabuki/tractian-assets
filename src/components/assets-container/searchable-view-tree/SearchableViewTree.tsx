import { FilterOptionsType, IAsset, ILocation } from "@/interfaces/interfaces";
import { useState } from "react";
import { SearchBar } from "./search-bar/SearchBar";
import { ViewTree } from "./view-tree/ViewTree";

interface SearchableViewTreeProps {
  assets: IAsset[] | null;
  locations: ILocation[] | null;
  filters: FilterOptionsType;
  onComponentSelect: (component: IAsset) => void;
}

export const SearchableViewTree = ({
  assets,
  locations,
  filters,
  onComponentSelect,
}: SearchableViewTreeProps) => {
  const [text, setText] = useState("");

  return (
    <aside className="box-border flex w-[30rem] flex-col divide-y-[1px] divide-slate-600 border-[1.5px] border-slate-600 bg-slate-800/90">
      <SearchBar
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
        disabled={false}
        placeholder="Buscar ativo ou local"
      />
      <ViewTree
        assets={assets ? assets : []}
        locations={locations ? locations : []}
        onComponentSelect={onComponentSelect}
      />
    </aside>
  );
};
