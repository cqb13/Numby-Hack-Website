type ButtonProps = {
  type?: string;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  onClick?: (event: any) => void;
  children?: any;
};

const Button = (props: ButtonProps) => {
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    props.onClick?.(event);
  };

  return (
    <a
      onClick={handleClick}
      className="button"
      type={props.type}
      target={props.target}
      href={props.href}
    >
      {props.children}
    </a>
  );
};

export default Button;
