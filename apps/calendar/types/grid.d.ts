import type TZDate from '@src/time/date';

import { FormattedTimeString } from './time/datetime';

export interface GridUIModel {
  day: number;
  width: number;
  left: number;
}

export interface GridPosition {
  x: number;
  y: number;
}

export interface CommonGridColumn {
  date: TZDate;
  left: number;
  width: number;
}

export interface TimeGridRow {
  top: number;
  height: number;
  startTime: FormattedTimeString;
  endTime: FormattedTimeString;
}

export interface TimeGridData {
  rows: TimeGridRow[];
  columns: CommonGridColumn[];
}
