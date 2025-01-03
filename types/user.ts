export interface UserRequest {
  name?: string;
  email: string;
  password: string;
}

export interface UserFirebaseResponse {
  localId: string;
  email: string;
  displayName: string;
  idToken: string;
  registered: boolean;
  refreshToken: string;
  expiresIn: string;
}

export interface UserBase {
  alunoId: number;
  firebaseId: string;
  nome: string;
  email: string;
  dataNascimento: string;
  dataCadastro: string;
  situacaoPagamento: string;
  situacaoTreino: string;
  ativo: boolean;
  professorId?: number;
  professorNome?: string;
  role: string;
}
