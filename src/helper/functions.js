export function product_find_index(state, id) {
    return state.selected_items.findIndex((item) => item.id === id);
}
export function product_is_in_cart(state, id) {
    return !!!state.selected_item.find((item) => item.id === id);
}
