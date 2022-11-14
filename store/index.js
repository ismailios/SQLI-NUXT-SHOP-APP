import { v4 as uuid4 } from 'uuid'
export const state = () => ({
    products: [],
    cart: []
})

export const getters = {
    totalPrice: state => {
        if (!state.cart.length) return 0
        return state.cart.reduce((acc, next) => acc += +next.combinedPrice, 0)
    },
    cartCounter: state => {
        if (!state.cart.length) return 0
        return state.cart.reduce((acc, next) => acc += +next.count, 0)
    }
}

export const mutations = {
    updateproducts: (state, data) => {
        state.products = data
    },
    addToCart: (state, forminput) => {
        forminput.id = uuid4()
        state.cart.push(forminput)
    }
}

export const actions = {
    async getproducts({ state, commit }) {
        if (state.products.length > 0) return
        try {
            // TO MOVE TO .ENV FILE
            const response = await fetch(
                "https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=12&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US", {
                headers: {
                    'X-RapidAPI-Key': "9783d241c4mshbeb46c9ae0a647bp19e043jsn45d15761b6cc",
                    'X-RapidAPI-Host': "asos2.p.rapidapi.com"
                }
            }
            )

            const data = await response.json()
            // console.log("data", data)

            commit('updateproducts', data.products)

        } catch (error) {
            console.log(error)

        }

    }
}