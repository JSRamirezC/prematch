import { CompetitorsDto } from "./competitors.dto";

export class EventoDto {
  categories: any= [];
  competitors:Array<CompetitorsDto>= [];
  description: string;
  id: string;
  markets: any= [];
  provider: string;
  type: string;
}
