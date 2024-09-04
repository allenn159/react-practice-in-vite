import { format } from "date-fns";

export function formatUnixTimestamp(timestamp: number, formatString: string) {
  const date = new Date(timestamp * 1000);

  return format(date, formatString);
}
