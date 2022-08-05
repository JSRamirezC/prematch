import { CompetitorsDto } from "./competitors.dto";
import { MarketsDto } from "./markets.dto";

export class EventoDetailDto {
  categories: any= [];
  competitors:Array<CompetitorsDto>= [];
  description: string;
  id: string;
  markets :Array<MarketsDto>= [];
  provider: string;
  type: string;
}
