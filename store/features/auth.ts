import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { UserBase, UserRequest } from "../../types/user";
import { firebaseLogin, firebaseSignup } from "../../api/firebase";
import { createAluno, getAlunoByFirebaseId } from "../../api/auth";

interface IAuthSlice {
  isLogged: boolean;
  isAccountCreated: boolean;
  isLogging: boolean;
  hasError: boolean;
  user: UserBase | undefined;
}

const initialState: IAuthSlice = {
  isLogged: false,
  isAccountCreated: false,
  isLogging: false,
  hasError: false,
  user: undefined,
};

export const login = createAsyncThunk(
  "auth/login",
  async (user: UserRequest) => {
    const firebaseUser = await firebaseLogin(user.email, user.password);
    if (!firebaseUser) throw new Error("Usuário não encontrado");
    const firebaseId = firebaseUser.localId;
    const aluno = await getAlunoByFirebaseId(firebaseId);
    if (!aluno) throw new Error("Aluno não encontrado");
    return aluno;
  }
);

export const signup = createAsyncThunk(
  "auth/signup",
  async (user: UserRequest) => {
    const firebaseResp = await firebaseSignup(user.email, user.password);
    if (!firebaseResp) throw new Error("Erro ao criar usuário");
    const firebaseId = firebaseResp.localId;
    const idAluno = await createAluno(user, firebaseId);
    if (!idAluno) throw new Error("Erro ao criar aluno");
  }
);

export const updateUserData = createAsyncThunk(
  "auth/updateUser",
  async (firebaseId: string) => {
    const aluno = await getAlunoByFirebaseId(firebaseId);
    if (!aluno) throw new Error("Aluno não encontrado");
    return aluno;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isLogged = false;
      state.user = undefined;
    },
    clearError: (state) => {
      state.hasError = false;
    },
    clearAccountCreated: (state) => {
      state.isAccountCreated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLogging = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLogging = false;
      state.isLogged = true;
      state.hasError = false;
      state.user = action.payload;
    });
    builder.addCase(login.rejected, (state) => {
      state.isLogging = false;
      state.isLogged = false;
      state.hasError = true;
    });
    builder.addCase(signup.pending, (state) => {
      state.isLogging = true;
    });
    builder.addCase(signup.fulfilled, (state) => {
      state.isLogging = false;
      state.hasError = false;
      state.isAccountCreated = true;
    });
    builder.addCase(signup.rejected, (state) => {
      state.isLogging = false;
      state.hasError = true;
      state.isAccountCreated = false;
    });
    builder.addCase(updateUserData.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const { logout, clearError, clearAccountCreated } = authSlice.actions;
