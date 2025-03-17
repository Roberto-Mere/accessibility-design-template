export interface MultipleOptionData {
  id: string;
  label: string;
  value: string;
  required?: boolean;
}

export const checkBoxOptions: MultipleOptionData[] = [
  {
    id: 'terms-1',
    label: 'Accept the Terms',
    value: 'terms-1',
    required: true,
  },
  {
    id: 'terms-2',
    label: 'Accept the Terms 2',
    value: 'terms-2',
    required: true,
  },
];

export const radioOptions: MultipleOptionData[] = [
  { id: 'ui-dev', label: 'UI Developer', value: 'ui-dev' },
  { id: 'ui-designer', label: 'UI/UX Designer', value: 'ui-designer' },
  {
    id: 'accessibility-expert',
    label: 'Accessibility  Expert',
    value: 'accessibility-expert',
  },
  { id: 'qa-engineer', label: 'QA Engineer', value: 'qa-engineer' },
  { id: 'other', label: 'UI Developer', value: 'other' },
];
