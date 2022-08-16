import {Injectable} from '@angular/core';
import {NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class NgbDateStringAdapter extends NgbDateAdapter<Date> {

  /**
   * Formateador de la libreria NgbDate
   * @param formatter
   */
  constructor(private formatter: NgbDateParserFormatter) {
    super();
  }

  /**
   * Traduce de un string de fecha a un NgbDateStruct mediante el NgbDateParserFormatter.
   * @param yearsPlus cantidad de años a sumar o restar a la fecha conseguida.
   * @param dateStr   cadena de texto que representa una fecha en formato yyyy-MM-dd
   */
  fromFormatter(yearsPlus?: number, dateStr?: string): NgbDateStruct {
    const d = dateStr ? new Date(dateStr) : new Date();
    return this.formatter.parse((d.getFullYear() + (yearsPlus || 0)) + '-' + (d.getMonth() + 1) + '-' + d.getDate());
  }

  /**
   * Traduce de un string de fecha a un NgbDateStruct.
   * @param dateStr cadena de texto de fecha
   */
  fromString(dateStr: string): NgbDateStruct {
    let ngbDate: NgbDateStruct = null;
    if(dateStr != null && dateStr != undefined) {
      const date = new Date(Date.parse(dateStr));
      ngbDate = <NgbDateStruct>{};
      ngbDate.year = date.getUTCFullYear();
      ngbDate.month = date.getUTCMonth() + 1;
      ngbDate.day = date.getUTCDate();
    }
    return ngbDate;
  }

  /**
   * Traduce de un Date a un NgbDateStruct.
   * @param date
   */
  fromModel(date: Date): NgbDateStruct {
    return { year: date.getUTCFullYear(), month: date.getUTCMonth() + 1, day: date.getUTCDate() };
  }

  /**
   * Traduce de NgbDateStruct a un Date.
   * @param date
   */
  toModel(date: NgbDateStruct): Date {
    return new Date(Date.UTC(date.year, date.month - 1, date.day, 0, 0, 0));
  }

  /**
   * Transforma un Date al formato especificado.
   * @param dateStruct
   * @param format
   */
  toString(dateStruct: NgbDateStruct, format?: string): string {
    const tmpM = dateStruct.month;
    const month = tmpM > 9 ? tmpM : '0' + tmpM;

    return [dateStruct.year, month, dateStruct.day].join('-') + ' 00:00:00';
  }
}
