import { axiosInstance } from "./axios.config";

import { TrainingBlockDetails, WorkoutPlan } from "../types/workoutPlan";

export async function getActiveWorkoutPlan(
  idAluno: number
): Promise<WorkoutPlan | undefined> {
  const url = `/aluno/${idAluno}/planilha`;
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    console.log("Error@api/aluno.ts/getActiveWorkoutPlan(): ", error);
    throw error;
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
    throw error;
  }
}
