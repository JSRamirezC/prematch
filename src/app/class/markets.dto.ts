import { SelectionsDto } from "./selections.dto";

export class MarketsDto {
  description: string;
  id: string;
  selections:Array<SelectionsDto>= [];;
  status: string;
}
