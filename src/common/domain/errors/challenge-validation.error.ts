export interface StudentValidationError {
  value: any;
  field: string;
  validation?: {
    [type: string]: string;
  };
  children?: StudentValidationError[];
}
