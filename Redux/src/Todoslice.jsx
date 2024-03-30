import { createSlice } from "@reduxjs/toolkit";
export const Todoslice = createSlice({
    name: "todo",
    initialState: {
        list: []
    },
    reducers: {
        addtodo: (state, action) => {
            const todo = {
                id: Date.now(),
                title: action.payload.title
            }
            state.list.push(todo)
        },
        removetodo: (state, action) => {
            const idToRemove = action.payload
            state.list = state.list.filter((item) => item.id !== idToRemove)
        },
        // edittodo:(state,action)=>{
        // let id = action.payload
        // let title = action.payload
        // const edititem = state.find((item)=>item.id == id)
        // if (edititem){
        //     edititem.title = title
        // }
        //}
        editTodo: (state, action) => {
            const todoToEdit = state.list.find(item => item.id === action.payload);
            if (todoToEdit) {
                todoToEdit.edit = true;
            }
        },
        updateTodo: (state, action) => {
            const { id, title} = action.payload;
            const todoToEdit = state.list.find(item => item.id === id);
            if (todoToEdit) {
                todoToEdit.title = title;   
                todoToEdit.edit = false;
            }
        },
    }
})
export const { addtodo, removetodo, editTodo, updateTodo } = Todoslice.actions
export default Todoslice.reducer;