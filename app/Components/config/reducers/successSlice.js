import { createSlice } from "@reduxjs/toolkit";

const successSlice = createSlice({
    name: 'Success',
    initialState: {
        successItems: []
    },
    reducers: {
        addToSuccess: (state, action) => {
            state.successItems.push({
                title: action.payload.title,
                price: action.payload.price,
                description: action.payload.description,
                image: action.payload.image,
                id: action.payload.id,
                star: action.payload.star,
                downloadLink: action.payload.downloadLink
            })
        },
        removeSuccessItem: (state, action) => {
            state.successItems.splice(action.payload.index, 1)
        }
    }
})

export const { addToSuccess, removeSuccessItem } = successSlice.actions
export default successSlice.reducer