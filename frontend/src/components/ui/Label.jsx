import { cn } from "../../lib/utills";

const Label = ({ htmlFor = "", className = "", children, ...rest }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn("text-sm font-semibold", className)}
      {...rest}
    >
      {children}
    </label>
  );
};

export default Label;
