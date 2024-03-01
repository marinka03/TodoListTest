import clsx from 'clsx';
import style from './Button.module.css';

const Button = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  console.dir(selected=== true)
  return (
    <button
      className={clsx(style.btn, {
        [style.isSelected]: selected,
      })}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
