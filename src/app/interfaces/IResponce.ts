export interface IResponce {
  success: boolean;
  errors?: any[];
  message?: string;
  [key: string]: any; // px gia ta products
}
