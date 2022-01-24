export function product_find_index(state, id) {
    return state.selected_items.findIndex((item) => item.id === id);
}

export function find_index(state , id) {
    return state.findIndex((item) => item.id === id);
}