export function stringToBoolean(value: string): boolean | undefined {
  if (!value) return undefined;

  const statusMap = {
    true: true,
    false: false,
  };

  return statusMap[value as keyof typeof statusMap];
}
