import { IHasUUID } from '../hasUUID/hasUUID.interface';
export interface IItem extends IHasUUID {
  name: string;
  const: number;
}
