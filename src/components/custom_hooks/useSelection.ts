import { useState } from "react";

type UseSelectionOptions<T> = {
  options: T[];
  initiallyDisabled: boolean;
};

const equalFunction = <T>(a: T, b: T) => a === b;

export function useSelection<T>({
  options = [],
  initiallyDisabled = false,
}: UseSelectionOptions<T>) {
  const [isDisabled, setIsDisabled] = useState(initiallyDisabled);
  const [selected, setSelected] = useState<T[]>([]);

  const optionSelected = (option: T) =>
    selected.find((selectedOption) => equalFunction(option, selectedOption)) !==
    undefined;

  const allSelected = options.every(optionSelected);

  const someSelected = options.some(optionSelected);

  function toggleAll() {
    if (allSelected) {
      setSelected([]);
    } else {
      setSelected(options);
    }
  }

  function toggle(x: T) {
    if (optionSelected(x)) {
      setSelected(selected.filter((element) => !equalFunction(x, element)));
    } else {
      setSelected([...selected, x]);
    }
  }

  function isSelected(x: T) {
    return optionSelected(x);
  }

  const isEnabled = !isDisabled;

  function disable() {
    setIsDisabled(true);
  }

  function enable() {
    setIsDisabled(false);
  }

  function clear() {
    setSelected([]);
  }

  const selection: Selection<T> = {
    selected,
    allSelected,
    someSelected,
    toggleAll,
    toggle,
    isSelected,
    isEnabled,
    disable,
    enable,
    clear,
  };

  return selection;
}

type Selection<T> = {
  selected: T[];
  allSelected: boolean;
  someSelected: boolean;
  toggleAll: () => void;
  toggle: (item: T) => void;
  isSelected: (item: T) => boolean;
  isEnabled: boolean;
  disable: () => void;
  enable: () => void;
  clear: () => void;
};
