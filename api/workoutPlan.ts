import { axiosInstance } from "./axios.config";

import {
  ExpiredWorkoutPlan,
  TrainingBlockDetails,
  WorkoutPlan,
} from "../types/workoutPlan";

import {
  mapPlanilhaByIdResponseToPlanilhaAtiva,
  WorkoutPlanHistory,
} from "../utils/mapping";
import { AxiosResponse } from "axios";

export async function getActiveWorkoutPlan(
  idAluno: number
): Promise<WorkoutPlan | undefined> {
  const url = `/aluno/${idAluno}/planilha`;
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    console.log("Error@api/workoutPlan.ts/getActiveWorkoutPlan(): ", error);
  }
}

export async function getTrainingBlockDetails(
  id: number
): Promise<TrainingBlockDetails | undefined> {
  const url = `/bloco/${id}`;
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    console.log("Error@api/workoutPlan.ts/getTrainingBlockDetails(): ", error);
  }
}

export async function getWorkoutPlanHistory(
  idAluno: number
): Promise<ExpiredWorkoutPlan[] | undefined> {
  const url = `/aluno/${idAluno}/planilha/historico`;
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    console.log("Error@api/workoutPlan.ts/getWorkoutPlanHistory(): ", error);
  }
}

export async function getWorkoutPlanById(
  idPlanilha: string
): Promise<WorkoutPlan | undefined> {
  try {
    const response: AxiosResponse<WorkoutPlanHistory | undefined> =
      await axiosInstance.get(`/planilha/${idPlanilha}`);

    if (!response.data) return undefined;
    return mapPlanilhaByIdResponseToPlanilhaAtiva(response.data);
  } catch (error) {
    console.log("Error@api/workoutPlan.ts/getWorkoutPlanById(): ", error);
  }
}
