import { Pill } from "./styled";

interface IButtonProps {
  breed: string;
  onClick: () => void;
}

export const Button: React.FC<IButtonProps> = ({ breed, onClick }) => {
  return (
    <Pill data-ut="breedName-button" onClick={onClick}>
      {breed}
    </Pill>
  );
};
