// nicely build the action for dispatch
export const deletePost = (id) => {
  return {
    type: 'DELETE_POST',
    id: id
  }
}
