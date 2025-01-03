export interface LinkedTraining {
  idTreino: number;
  tituloTreino: string;
}

export interface TrainingBlock {
  idBloco: number;
  tituloBloco: string;
  treino: LinkedTraining;
}

export interface WorkoutPlanSession {
  idSessao: number;
  tituloSessao: string;
  blocos: TrainingBlock[];
}

export interface WorkoutPlan {
  idPlanilha: number;
  sessoes: WorkoutPlanSession[];
}

export interface Exercise {
  idMovimento: number;
  tituloMovimento: string;
  descricoes: string[] | string | undefined;
}

export interface TrainingBlockDetails {
  idBloco: number;
  idTreino: string;
  movimentos: Exercise[];
}
