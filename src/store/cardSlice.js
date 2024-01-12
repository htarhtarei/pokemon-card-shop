import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cards: [],
    searchCards: [],
    selectedCard: [],
    isShow: false,
    isPay: false,
    totalCarts: 0,
    total: 0,
}

export const cartSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        getCards: (state, { payload }) => {
            state.cards = payload;
        },
        getSearchCard: (state, { payload }) => {
            state.searchCards = payload
        },
        getSelectCards: (state, { payload }) => {
            const exitCard = state.selectedCard.find(
                (card) => card.id === payload.id
            );
            if (exitCard) {
                const addCart = state.selectedCard.map((card) => {
                    if (card.id === payload.id) {
                        return {
                            ...card,
                            qty: card.qty + 1,
                            left: card.left - card.qty,
                        };
                    } else {
                        return card;
                    }
                });
                state.selectedCard = addCart;
            } else {
                state.selectedCard.push({...payload, qty: 1, left: 19 });
            }
        },
        getIsShow: (state, { payload }) => {
            state.isShow = payload;
        },
        getIsPay: (state, { payload }) => {
            state.isPay = payload;
        },
        increAndDecre: (state, { payload }) => {
            const carts = state.selectedCard.map(card => {
                if (card.id === payload.id) {
                    if (payload.type === "increase") {
                        let newQty = card.qty + 1;
                        let newLeft = card.left - 1

                        if (card.qty >= 20) {
                            newLeft = 0
                        }

                        //default return
                        return {
                            ...card,
                            qty: newQty,
                            left: newLeft
                        };

                    } else if (payload.type === "decrease") {
                        let newQty = card.qty - 1;
                        let newLeft = card.left + 1;

                        if (card.qty <= 1) {
                            newLeft = 19;
                        }

                        //default return
                        return {
                            ...card,
                            qty: newQty,
                            left: newLeft,
                        };
                    }
                } else {
                    return card
                }
            })

            state.selectedCard = carts
        },
        deletedCard: (state) => {
            state.selectedCard = [];
        },
        getTotalCarts: (state) => {
            const cartQtys = state.selectedCard.map(card => card.qty)
            const totalQty = cartQtys.reduce((prev, curr) => prev + curr)
            state.totalCarts = totalQty
        },
        getTotalPrices: (state) => {
            const cartPrice = state.selectedCard.map(
                (cart) => cart.cardmarket.prices.trendPrice * cart.qty
            );
            const totalPRice = cartPrice.reduce((prev, curr) => prev + curr);
            state.total = totalPRice;
        },
    },
});
export const {
    getCards,
    getSelectCards,
    getIsShow,
    getIsPay,
    increAndDecre,
    deletedCard,
    getTotalCarts,
    getTotalPrices,
    getSearchCard,
} = cartSlice.actions;
export default cartSlice.reducer