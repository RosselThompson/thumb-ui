import { IButton } from 'types/Interfaces/Button/IButton';

export const Button: React.FC<IButton> = (prop): JSX.Element => {
  const { text, isDisabled } = prop;
  return (
    <button className="myButton" disabled={isDisabled}>
      {text}
    </button>
  );
};
