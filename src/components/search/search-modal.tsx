import { AnimatePresence, motion } from "framer-motion";
import React, { Dispatch, SetStateAction } from "react";
import Button from "../ui/button";
import Input from "../ui/input";

const SearchModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 inset-0 z-50 grid place-items-center absolute h-screen"
        >
          <div
            className="relative z-10 flex items-center justify-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Input />
            <Button className="font-light" onClick={() => setIsOpen(false)}>
              Search
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
