import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { getRandomDogImageUrl } from "../api";
import {
  Button,
  CloseButton,
  DogPicture,
  PictureContainer,
  Title,
} from "./styled";

interface ModalProps {
  currentBreed: string;
}

export const Modal = ({
  currentBreed,
  ...props
}: ModalProps & ReactModal.Props) => {
  const [imageUrl, setImageUrl] = useState("");

  const fetchRandomBreedImage = async () => {
    const apiResponse = await getRandomDogImageUrl(currentBreed);
    setImageUrl(apiResponse.message);
  };

  useEffect(() => {
    if (!currentBreed) {
      return;
    }
    fetchRandomBreedImage();
  }, [currentBreed]);

  const onModalClose = (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => {
    setImageUrl("");
    props.onRequestClose && props.onRequestClose(event);
  };

  return (
    <ReactModal
      {...props}
      appElement={document.querySelector("body")!}
      onRequestClose={onModalClose}
      data={{ ut: "dog-modal" }}
    >
      <CloseButton onClick={onModalClose} />
      <Title>Cute photo of {currentBreed}!</Title>
      <Button onClick={fetchRandomBreedImage} data-ut="modal-random-button">
        Another! 🐶
      </Button>
      <PictureContainer>
        <DogPicture src={imageUrl} alt={currentBreed} data-ut="dog-picture" />
      </PictureContainer>
    </ReactModal>
  );
};
