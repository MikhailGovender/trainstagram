export function convertDateToSqlDateTimeOffset(date: Date): string {
    const isoString = date.toISOString();
    const sqlDateTimeOffset = isoString.replace('T', ' ').replace('Z', '');
  
    return sqlDateTimeOffset;
  }