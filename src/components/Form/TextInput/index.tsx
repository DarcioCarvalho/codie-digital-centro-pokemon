import { DetailedHTMLProps, ForwardRefRenderFunction, InputHTMLAttributes, forwardRef, useId } from "react";

import { TextInputComponent } from "./styles";
import { Text } from "../../Text";
import { FieldSet } from "../Shared/FieldSet";
import { Label } from "../Shared/Label";


interface TextInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string;
  placeholder?: string;
  error?: string;
}


const InputBase: ForwardRefRenderFunction<HTMLInputElement, TextInputProps> = (
  {
    id,
    label,
    placeholder,
    error = null,
    ...rest
  },
  ref
) => {
  const idDefault = useId();

  if (!id) {
    id = idDefault;
  }

  return (
    <FieldSet>
      {!!label &&
        <Label htmlFor={id}>
          {label}
        </Label >}

      <TextInputComponent
        ref={ref}
        placeholder={placeholder}
        id={id}
        {...rest}
      />

      {!!error &&
        <Text type="error" style={{ marginTop: "-0.357rem" }}>
          {error}
        </Text>
      }

    </FieldSet>
  );
}

export const TextInput = forwardRef(InputBase);

