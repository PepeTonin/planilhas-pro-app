import { WorkoutPlan } from "../types/workoutPlan";

export interface LinkedTrainingHistory {
  id: number;
  title: string;
}

export interface TrainingBlockHistory {
  id: number;
  title: string;
  linkedTraining: LinkedTrainingHistory;
}

export interface WorkoutPlanSessionHistory {
  id: number;
  title: string;
  trainingBlocks: TrainingBlockHistory[];
}

export interface WorkoutPlanHistory {
  id?: number;
  title: string;
  description: string;
  sessions: WorkoutPlanSessionHistory[];
}

export function mapPlanilhaByIdResponseToPlanilhaAtiva(
  workoutPlan: WorkoutPlanHistory
): WorkoutPlan {
  return {
    idPlanilha: workoutPlan.id || -1,
    sessoes: workoutPlan.sessions.map((session) => ({
      idSessao: session.id,
      tituloSessao: session.title,
      blocos: session.trainingBlocks.map((block) => ({
        idBloco: block.id,
        tituloBloco: block.title,
        treino: {
          idTreino: block.linkedTraining.id,
          tituloTreino: block.linkedTraining.title,
        },
      })),
    })),
  };
}
