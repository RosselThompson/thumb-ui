export interface IDropdownField {
  label: string;
  value: string;
}

export interface IDropdownProps {
  fields: IDropdownField[];
  onChange: () => void;
}
