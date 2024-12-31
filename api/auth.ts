import { UserBase, UserRequest } from "../types/user";
import { axiosInstance } from "./axios.config";

export async function getAlunoByFirebaseId(
  firebaseId: string
): Promise<UserBase | undefined> {
  const url = `/aluno/${firebaseId}`;
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    console.log("Error@api/aluno.ts/getAlunoByFirebaseId(): ", error);
    throw error;
  }
}

function mapUserToBodyRequest(user: UserRequest, firebaseId: string) {
  return {
    firebaseId,
    nome: user.name,
    email: user.email,
    senha: user.password,
  };
}

export async function createAluno(
  user: UserRequest,
  firebaseId: string
): Promise<number | undefined> {
  const url = "/aluno/novo";
  const bodyRequest = mapUserToBodyRequest(user, firebaseId);
  try {
    const response = await axiosInstance.post(url, bodyRequest);
    return response.data;
  } catch (error) {
    console.log("Error@api/aluno.ts/getAlunoByFirebaseId(): ", error);
    throw error;
  }
}
