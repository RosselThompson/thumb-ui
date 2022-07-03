import { Loader } from 'components/Loader/Loader';
import { IButtonProps } from 'types/Interfaces/Button/IButton';

export const Button: React.FC<IButtonProps> = (prop): JSX.Element => {
  const { text, isDisabled, isLoading, onClick } = prop;
  return (
    <button
      className="btn"
      disabled={isDisabled || isLoading}
      onClick={onClick}>
      {isLoading ? (
        <div className="flex justify-center">
          <Loader theme="dark" size="sm" />
        </div>
      ) : (
        text
      )}
    </button>
  );
};
