import React, { useEffect, useState } from "react";
import { getAllBreeds } from "./api";
import { Button } from "./Button";
import { Modal } from "./Modal";
import { useModal } from "./Modal/useModal";
import { GlobalStyles, MainContainer, MainTitle } from "./styled";

function App() {
  const [breeds, setBreeds] = useState<string[]>([]);
  const { isModalOpened, breedTypeForModal, openModal, closeModal } =
    useModal();

  useEffect(() => {
    const initializeAppWithAllBreeds = async () => {
      const apiResponse = await getAllBreeds();
      const allAvailableBreeds = Object.keys(apiResponse.message);
      setBreeds(allAvailableBreeds);
    };
    initializeAppWithAllBreeds();
  }, []);

  if (!breeds) {
    return null;
  }

  return (
    <>
      <GlobalStyles />
      <MainTitle>Dogenerator 🐶</MainTitle>
      <MainContainer>
        {breeds.map((breed) => (
          <Button breed={breed} onClick={() => openModal(breed)} key={breed} />
        ))}
      </MainContainer>
      <Modal
        isOpen={isModalOpened}
        onRequestClose={closeModal}
        currentBreed={breedTypeForModal}
      />
    </>
  );
}

export default App;
