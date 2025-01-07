export function formatDate(dateString: string): string {
  if (!dateString) return "";
  if (dateString.includes("T")) dateString = dateString.split("T")[0];
  const [year, month, day] = dateString.split("-");
  return `${day}/${month}/${year.slice(-2)}`;
}
