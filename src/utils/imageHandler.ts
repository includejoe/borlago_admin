import React, { SetStateAction } from "react";

export const imageHandler = (
  e: React.ChangeEvent<HTMLInputElement>,
  setImage: React.Dispatch<SetStateAction<string>>
) => {
  try {
    const selected: File = e.target.files?.[0] as File;
    if (selected) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(selected);
    }
  } catch (err) {
    // pass
  }
};
