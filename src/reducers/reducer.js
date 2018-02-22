const initialState = {
  data: {
    title: "Welcome to React Redux",
    content: `Synergistically unleash backward - compatible interfaces with cross - platform infomediaries
        Authoritatively enhance revolutionary interfaces without client - based synergy.Globally revolutionize
        premium outside the box thinking whereas covalent interfaces.Seamlessly synergize frictionless infrastructures
        before high standards in total linkage.Distinctively expedite high - quality bandwidth for global e-services.`,
    comments: [{ author: "Roy", content: "hello world" }, { author: "Bob", content: "goodnight moon" }]
  }
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case "ADD_COMMENT":
      return {
         ...state, 
         post: {
           ...state.post,
           comments: [ ...state.post.comments, action.comment]
         }
        };
    default:
      return state;
  }
}

export default reducer;