import { HTMLAttributes, forwardRef, useEffect, useState } from "react";
import { passwordStrength } from "check-password-strength";

import { ErrorMessage } from "../shared/input/ErrorMessage";
import { InputIcon } from "../shared/input/Icons";

import { cn } from "@/utils";
import { Input as InputRoot } from "@/ui/input";
import { CheckboxPrimitive, Checkbox as CheckboxRoot } from "@/ui/checkbox";
import { SwitchPrimitives, SwitchRoot } from "@/ui/switch";
import { TextareaRoot } from "@/ui/textarea";
import { PasswordStrength } from "@/shared/input/PasswordStrength";
import {
  CheckboxAndSwitchProps,
  InputProps,
  TextareaProps,
} from "@/types/formTypes";

const Input = forwardRef<
  HTMLInputElement,
  InputProps & HTMLAttributes<HTMLInputElement>
>(
  (
    {
      type = "text",
      classNames,
      onChange,
      iconSize,
      error,
      width = "100%",
      isPasswordStrength,
      min,
      max,
      ...props
    },
    ref,
  ) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [strength, setStrength] = useState(0);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
      if (typeof ref === "object" && ref?.current)
        setInputValue(ref.current.value);

      if (type === "password" && typeof inputValue === "string") {
        const passwordStrengthId = passwordStrength(inputValue).id;

        setStrength(passwordStrengthId);
      }
    }, [inputValue, type, ref]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      onChange?.(e);
    };

    return (
      <div className={classNames?.root}>
        {props.label && type !== "checkbox" && (
          <label className={classNames?.label}>{props.label}</label>
        )}
        <div
          className={cn("relative", {
            "flex items-center gap-1": type === "checkbox",
          })}
          style={{ width }}
        >
          <InputRoot
            ref={ref}
            className={cn(
              "text-sm",
              { "border-error": error },
              {
                "size-4 rounded-sm cursor-pointer": type === "checkbox",
              },
              classNames?.input,
            )}
            placeholder={props.placeholder}
            type={isPasswordVisible ? "text" : type}
            value={props.value}
            onChange={handleChange}
            {...props}
            max={max}
            min={min}
          />

          <InputIcon
            classNameIcon={classNames?.icon}
            error={error}
            iconSise={iconSize}
            isPasswordVisible={isPasswordVisible}
            setIsPasswordVisible={setIsPasswordVisible}
            type={type}
            value={props.value}
          />
          {props.label && type === "checkbox" && (
            <label className={classNames?.label}>{props.label}</label>
          )}
        </div>
        {isPasswordStrength && (
          <PasswordStrength className="my-1 px-0.5" strength={strength} />
        )}

        {error && type !== "checkbox" && <ErrorMessage error={error} />}
      </div>
    );
  },
);

Input.displayName = "Input";

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return <TextareaRoot ref={ref} {...props} className={className} />;
  },
);

Textarea.displayName = "Textarea";

const Switch = forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  CheckboxAndSwitchProps
>(({ className, ...props }, ref) => {
  return <SwitchRoot ref={ref} {...props} className={className} />;
});

Switch.displayName = "Switch";

const Checkbox = forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxAndSwitchProps
>(({ className, ...props }, ref) => {
  return <CheckboxRoot ref={ref} {...props} className={className} />;
});

Checkbox.displayName = "Checkbox";

export { Input, Checkbox, Switch, Textarea };
