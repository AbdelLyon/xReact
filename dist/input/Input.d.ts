import { HTMLAttributes } from 'react';
import { CheckboxAndSwitchProps, InputProps, TextareaProps } from '../types/formTypes';
declare const Input: import('react').ForwardRefExoticComponent<InputProps & HTMLAttributes<HTMLInputElement> & import('react').RefAttributes<HTMLInputElement>>;
declare const Textarea: import('react').ForwardRefExoticComponent<TextareaProps & import('react').RefAttributes<HTMLTextAreaElement>>;
declare const Switch: import('react').ForwardRefExoticComponent<CheckboxAndSwitchProps & import('react').RefAttributes<HTMLButtonElement>>;
declare const Checkbox: import('react').ForwardRefExoticComponent<CheckboxAndSwitchProps & import('react').RefAttributes<HTMLButtonElement>>;
export { Input, Checkbox, Switch, Textarea };
