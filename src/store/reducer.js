const initState = {
    isOpenModal: false,
    currentUser: true,
}

const OPEN_MODAL = 'open_modal'
const CLOSE_MODAL = 'close_modal'


const reducer = (state, action) => {
    switch (action) {
        case OPEN_MODAL:
            return {
                ...state,
                isOpenModal: true,
            }
        case CLOSE_MODAL:
            return {
                ...state,
                isOpenModal: false,
            }
        default:
            throw new Error('Invalid action')
    }

}

export { initState, OPEN_MODAL, CLOSE_MODAL }
export default reducer