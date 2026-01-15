import { createSlice, nanoid } from "@reduxjs/toolkit"

const users = JSON.parse(localStorage.getItem("users")) || [];
const currentUser = JSON.parse(localStorage.getItem("currentUser"));


const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        users,
        currentUser,
        isAuthenticated: !!currentUser,
    },
    reducers: {
        signup: {
            reducer: (state, action) => {
                const { id, name, email, password, contact } = action.payload;

                state.users.push({ id, name, email, password, contact });
                localStorage.setItem("users", JSON.stringify(state.users));

                state.currentUser = { id, name, email };
                state.isAuthenticated = true;
                localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
            },
            prepare: (formData) => ({
                payload: { id: nanoid(), ...formData },
            }),
        },
        signin: (state, action) => {
            const user = state.users.find(
                u =>
                    u.email === action.payload.email &&
                    u.password === action.payload.password
            );
            if (user) {
                state.currentUser = {
                    id: user.id,
                    name: user.name,
                    email: user.email
                };
                state.isAuthenticated = true;
                localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
            } else {
                alert("Invalid Credentias!!!")
            }
        },
        logout: (state) => {
            state.currentUser = null;
            state.isAuthenticated = false;
            localStorage.removeItem("currentUser");
        }
    }
});

export const {signup,signin,logout} = AuthSlice.actions;
export default AuthSlice.reducer;