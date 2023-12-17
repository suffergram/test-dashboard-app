import "./style.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  value?: string;
  className?: string;
};

export function Button({ value, className, ...delegatedProps }: ButtonProps) {
  return (
    <button
      className={`button${className ? ` ${className}` : ""}`}
      {...delegatedProps}
    >
      {value}
    </button>
  );
}
