export interface IDropdownField {
  label: string;
  value: string;
}

export interface IDropdownProps {
  fields: IDropdownField[];
  onChange: (values: IDropdownField) => void;
}
