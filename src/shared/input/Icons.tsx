import { Eye, EyeOff, Mail, Search } from "lucide-react";
import { Dispatch } from "react";

import { cn } from "@/utils";
import { InputType } from "@/types/formTypes";

type PropsIcon = { className?: string; size?: number };

export const PassowrdIcon = ({
  className,
  setIsPasswordVisible,
  isPasswordVisible,
  size = 16,
}: PropsIcon & {
  setIsPasswordVisible: Dispatch<React.SetStateAction<boolean>>;
  isPasswordVisible: boolean;
}) => {
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <>
      {isPasswordVisible ? (
        <EyeOff
          className={cn("text-muted-foreground right-3 absolute", className)}
          id="eye-icon"
          size={size}
          style={{ top: "50%", transform: "translateY(-50%)" }}
          onClick={togglePasswordVisibility}
        />
      ) : (
        <Eye
          className={cn("text-muted-foreground right-3 absolute", className)}
          size={size}
          style={{ top: "50%", transform: "translateY(-50%)" }}
          onClick={togglePasswordVisibility}
        />
      )}
    </>
  );
};

const SearchIcon = ({ className, size = 13 }: PropsIcon) => (
  <Search
    className={cn("text-muted-foreground right-3 absolute", className)}
    size={size}
    style={{ top: "50%", transform: "translateY(-50%)" }}
  />
);

const MailIcon = ({ className, size = 13 }: PropsIcon) => (
  <Mail
    className={cn("text-muted-foreground right-3 absolute", className)}
    size={size}
    style={{ top: "50%", transform: "translateY(-50%)" }}
  />
);

type Props = {
  type: InputType;
  isPasswordVisible: boolean;
  setIsPasswordVisible: any;
  error?: string;
  classNameIcon?: string;
  value?: string | number;
  iconSise?: number;
};

export const InputIcon = ({
  type,
  isPasswordVisible,
  setIsPasswordVisible,
  error,
  classNameIcon,
  value,
  iconSise,
}: Props) => {
  return (
    <>
      {type === "password" && (
        <div>
          <PassowrdIcon
            className={cn(
              { "text-error": error && error !== "" },
              classNameIcon,
            )}
            isPasswordVisible={isPasswordVisible}
            setIsPasswordVisible={setIsPasswordVisible}
            size={iconSise}
          />
        </div>
      )}
      {type === "search" && value === "" && (
        <SearchIcon
          className={cn({ "text-error": error && error !== "" }, classNameIcon)}
          size={iconSise}
        />
      )}
      {type === "email" && (
        <MailIcon
          className={cn({ "text-error": error && error !== "" }, classNameIcon)}
          size={iconSise}
        />
      )}
    </>
  );
};
