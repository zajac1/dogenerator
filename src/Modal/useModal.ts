import { useState } from "react";

export function useModal() {
  const [currentBreed, setCurrentBreed] = useState("");
  const [isModalOpened, setIsModalOpened] = useState(false);
  const closeModal = () => setIsModalOpened(false);
  const openModal = (breed: string) => {
    setCurrentBreed(breed);
    setIsModalOpened(true);
  };

  return {
    openModal,
    closeModal,
    isModalOpened,
    breedTypeForModal: currentBreed,
  };
}
