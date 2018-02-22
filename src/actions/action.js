export const addComment = (author, content) => ({
  type: "ADD_COMMENT",
  comment: {
    author,
    content
  }
});