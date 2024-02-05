import { api } from "../service/api"

export function useSchedulingAPI() {

  const getAvailableDates = async () =>
    await api.get("api/scheduling/date");

  const getAvailableTimes = async (date: string) =>
    await api.post("api/scheduling/time", { date });


  return {
    getAvailableDates,
    getAvailableTimes
  }
}