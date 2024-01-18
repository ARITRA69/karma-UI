"use client";
import React, { useState } from "react";
import SearchModal from "./search-modal";
import Button from "../ui/button";
import { SearchIcon } from "lucide-react";

const Search = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button variant="outline" onClick={() => setIsOpen(true)}>
        <SearchIcon />
      </Button>
      <SearchModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Search;
