export interface IDropdownField {
  label: string;
  value: string;
}

export interface IDropdownProps {
  name: string;
  fields: IDropdownField[];
  onChange: () => void;
}
