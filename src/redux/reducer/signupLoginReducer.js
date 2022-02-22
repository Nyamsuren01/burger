const initialState = {
    saving: false,
    logginIn: false,
    firebaseError: null,
    firebaseErrorCode: null,
    token: null,
    userId: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case "SIGN_USER_START":
            
        return {
            ...state,
            saving: true
        };

        case "SIGN_USER_ERROR":
            return {
                ...state,
                saving: false,
                error: action.error.response.data.error.message
            };

        case "SIGN_USER_SUCCESS":
            // console.log("NNNN" + action.data.localId);
                return { 
                    ...state,
                    saving: false,
                    token: action.token,
                    userId: action.userId 
                   
            };
        case "LOGIN_USER_START":
            
                return {
                    ...state,
                    logginIn: true
                };   
        case "LOGIN_USER_ERROR":
                    return {
                        ...state,
                        logginIn: false,
                        firebaseError: action.error.response.data.error.message,
                        firebaseErrorCode: action.error.response.data.error.code    
                    };  
                    
        case "LOGIN_USER_SUCCESS":
                        // console.log("NNNN" + action.data.localId);
                           return { 
                                ...state,
                                logginIn: false,
                                token: action.token,
                                userId: action.userId 
                               
                        };       
                       
         case "LOGOUT_USER":
             return {
                 ...state,
                 token:  null,
                 userId: null,
                 firebaseError: null,
                 firebaseErrorCode: null
             }
                        
         
        default :
        return state;
        
    }
}

export default reducer; 