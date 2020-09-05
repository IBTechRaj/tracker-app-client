const setUser = (payload) => ({ type: "SET_USER", payload})

export const logUserOut = () => ({type: "LOG_OUT"})


export const fetchUser = ( auth ) => dispatch => {
  const loginInfo = { auth };
  console.log(JSON.stringify(loginInfo))
    fetch(`http://localhost:3001/auth/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(loginInfo)
    })
    .then(res => res.json())
      .then( data => {
        console.log('i-d', data)
        localStorage.setItem("token", data.jwt)
        dispatch(setUser(data.user))
    })
}

export const signUp = (auth) => dispatch => {
//  const loginInfo = { auth };
  console.log(JSON.stringify(auth))
    fetch(`http://localhost:3001/auth/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(auth)
    })
    .then(res => res.json())
    .then(data => {
        console.log('u-d', data)
        localStorage.setItem("token", data.jwt)
        dispatch(setUser(data.user))
    })
}

export const  logout = () => dispatch => {
   dispatch(logUserOut())
    // remove user from local storage to log user out
    // localStorage.removeItem('user');
}
// console.log( JSON.stringify( auth ) )
//   function logout() {
//     userService.logout();
//     return { type: userConstants.LOGOUT };
// }
// export const logOut = ( auth ) => dispatch => {
  //  const loginInfo = { auth };
  // fetch( `http://localhost:3001/auth/logout`, {
  //   method: "DELETE",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Authorization": `Bearer ${localStorage.getItem("token")}`,
  //     // "Accept": "application/json"
  //   }
  //   // body: JSON.stringify(auth)
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //       console.log('o-d', data)
  //       // localStorage.setItem("token", data.jwt)
       
    // })
  
// }
// export const autoLogin = () => dispatch => {
//     fetch(`http://localhost:3001/auto_login`, {
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//             "Authorization": `Bearer ${localStorage.getItem("token")}`
//         }
//     })
//     .then(res => res.json())
//     .then(data => {
//         localStorage.setItem("token", data.token)
//         console.log(data)
//         dispatch(setUser(data.user))
//     })
// 