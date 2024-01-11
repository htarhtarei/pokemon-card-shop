import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cards: [],
    selectedCard: [],
    isShow: false,
    isPay: false,
}

export const cartSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        getCards: (state, { payload }) => {
            state.cards = payload
        },
        getSelectCards: (state, { payload }) => {
            const exitCard = state.selectedCard.find(card => card.id === payload.id)
            if (exitCard) {
                const addCart = state.selectedCard.map(card => {
                    if (card.id === payload.id) {
                        return {
                            ...card,
                            qty: card.qty + 1,
                            left: card.left - 1
                        }
                    } else {
                        return card
                    }
                })
                state.selectedCard = addCart
            } else {
                state.selectedCard.push({...payload, qty: 1, left: 19 });
            }

        },
        getIsShow: (state, { payload }) => {
            state.isShow = payload
        },
        getIsPay: (state, { payload }) => {
            state.isPay = payload
        }
    }
})
export const { getCards, getSelectCards, getIsShow, getIsPay, getLeftCard } = cartSlice.actions;
export default cartSlice.reducer