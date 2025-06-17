import { elementInterface } from "./elementInterface";

export type ElementFilterProps<T extends elementInterface> = {
  list: T[];
  setter: React.Dispatch<React.SetStateAction<T[]>>;
};
