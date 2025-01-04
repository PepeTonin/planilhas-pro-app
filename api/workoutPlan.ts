import { axiosInstance } from "./axios.config";

import {
  ExpiredWorkoutPlan,
  TrainingBlockDetails,
  WorkoutPlan,
} from "../types/workoutPlan";

export async function getActiveWorkoutPlan(
  idAluno: number
): Promise<WorkoutPlan | undefined> {
  const url = `/aluno/${idAluno}/planilha`;
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    console.log("Error@api/aluno.ts/getActiveWorkoutPlan(): ", error);
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
    console.log("Error@api/aluno.ts/getTrainingBlockDetails(): ", error);
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
    console.log("Error@api/aluno.ts/getWorkoutPlanHistory(): ", error);
  }
}
