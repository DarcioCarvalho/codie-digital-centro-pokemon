import {
  DetailedHTMLProps, ForwardRefRenderFunction,
  SelectHTMLAttributes, forwardRef, useId, useState
} from "react";

import { LabelSelectContainer, SelectComponent } from "./styles";
import { Text } from "../../Text";
import { FieldSet } from "../Shared/FieldSet";
import { Label } from "../Shared/Label";

export type ValueLabel = {
  value: string;
  label: string;
};

interface SelectProps extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  options: ValueLabel[] | string[];
  label?: string;
  placeholder?: string;
  error?: string;
  labelDirection?: "row" | "column";
}


const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
  {
    id,
    options,
    label,
    placeholder,
    error = null,
    labelDirection = "column",
    onChange,
    onClick,
    onBlur,
    ...rest
  },
  ref
) => {
  const idDefault = useId();
  const [selectValue, setSelectValue] = useState("");
  const [selectExpanded, setSelectExpanded] = useState(false);

  function toggleSelectExpanded() {
    setSelectExpanded(prevState => !prevState);
  }

  if (!id) {
    id = idDefault;
  }

  return (
    <FieldSet>
      <LabelSelectContainer $direction={labelDirection}>
        {!!label &&
          <Label htmlFor={id}>
            {label}
          </Label >}

        <SelectComponent
          ref={ref}
          placeholder={placeholder}
          id={id}
          aria-expanded={selectExpanded}
          $isPlaceholder={!!placeholder && !selectValue}
          $direction={labelDirection}
          onChange={(event) => {
            setSelectValue(event.target.value);

            onChange &&
              onChange(event);
          }}
          onClick={(event) => {
            const labelClicked = event.nativeEvent.offsetY < 0 && event.screenY > 0;

            if (!labelClicked)
              toggleSelectExpanded();

            onClick &&
              onClick(event);
          }}

          onBlur={(event) => {
            if (selectExpanded)
              toggleSelectExpanded();

            onBlur &&
              onBlur(event)
          }}

          {...rest}
        >

          {placeholder &&
            <option hidden value="" >
              {placeholder}
            </option>
          }

          {options &&
            options
              .sort()
              .map((newOptions: ValueLabel | string, index: number) => {
                return typeof newOptions === "string" ?
                  <option
                    key={`${rest.name}${newOptions || `${Date.now()}${index}`}`}
                    value={newOptions}
                  >
                    {newOptions}
                  </option>
                  :
                  <option
                    key={`${rest.name}${newOptions.value || `${Date.now()}${index}`}`}
                    value={newOptions.value}
                  >
                    {newOptions.label}
                  </option>
              })
          }
        </SelectComponent>
      </LabelSelectContainer>

      {!!error &&
        <Text type="error" style={{ marginTop: "-0.357rem" }}>
          {error}
        </Text>
      }

    </FieldSet>
  );
}

export const Select = forwardRef(SelectBase);

