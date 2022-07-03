import { ILoaderProps } from 'types/Interfaces/Loader/ILoader';

export const Loader: React.FC<ILoaderProps> = (props) => {
  const { theme, size = 'md' } = props;

  const themeClassName = theme === 'dark' ? `spinner__white` : 'spinner__black';

  const sizeClassName = size === 'sm' ? `spinner__sm` : 'spinner__md';

  return (
    <div
      data-testid="test-spinner"
      className={`spinner ${themeClassName} ${sizeClassName}`}></div>
  );
};
