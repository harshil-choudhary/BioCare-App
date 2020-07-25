const initialState = {
    add_family_member: {}
  };
  
  export const add_family_member = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_FAMILY_MEMBER': {
        // console.log(action.payload)
        return { ...state,add_family_member:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default add_family_member;