import { CompetitorsDto } from "./competitors.dto";
import { MarketsDto } from "./markets.dto";

export class EventoDetailDto {
  categories: any= [];
  competitors:Array<CompetitorsDto>= [];
  description: string;
  endTime: string;
  id: string;
  markets :Array<MarketsDto>= [];
  provider: string;
  score: string;
  startTime: string;
  startTimeD: Date;
  status: string;
  type: string;
}
