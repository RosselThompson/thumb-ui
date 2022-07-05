import Image from 'next/image';
import Select, { components } from 'react-select';
import {
  IDropdownField,
  IDropdownProps,
} from 'types/Interfaces/Dropdown/IDropdown';

export const Dropdown: React.FC<IDropdownProps> = (props) => {
  const { fields, onChange } = props;
  return (
    <Select
      isSearchable={false}
      components={{
        DropdownIndicator: (props) => (
          <components.DropdownIndicator {...props}>
            <Image
              src="/images/arrow.svg"
              alt="dropdown-arrow"
              width="11px"
              height="7px"
            />
          </components.DropdownIndicator>
        ),
      }}
      options={fields}
      classNamePrefix="dropdown"
      onChange={(newValue) => onChange(newValue as IDropdownField)}
      defaultValue={fields[0]}
    />
  );
};
