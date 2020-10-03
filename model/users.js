// // export default Users = [
// //     {
// //         id: 1, 
// //         email: 'user1@email.com',
// //         username: 'user1', 
// //         password: 'password', 
// //         userToken: 'token123'
// //     },
// //     {
// //         id: 2, 
// //         email: 'user2@email.com',
// //         username: 'user2', 
// //         password: 'pass1234', 
// //         userToken: 'token12345'
// //     },
// //     {
// //         id: 3, 
// //         email: 'testuser@email.com',
// //         username: 'testuser', 
// //         password: 'testpass', 
// //         userToken: 'testtoken'
// //     },
// // ];




// class Users {
//     // {
//     //     id: 1, 
//     //     email: 'user1@email.com',
//     //     username: 'user1', 
//     //     password: 'password', 
//     //     userToken: 'token123'
//     // },
//     // {
//     //     id: 2, 
//     //     email: 'user2@email.com',
//     //     username: 'user2', 
//     //     password: 'pass1234', 
//     //     userToken: 'token12345'
//     // },
//     // {
//     //     id: 3, 
//     //     email: 'testuser@email.com',
//     //     username: 'testuser', 
//     //     password: 'testpass', 
//     //     userToken: 'testtoken'
//     // },
    
//     constructor() {
        
//         this.state = {
//             login_Users : []
//         }
//       }
//         componentDidMount(){
//         const url = "http://172.16.29.44/wufoodapi/login_api.php"
//         return fetch(url)
//         .then((response) => response.json())
//         .then((responseJson) => {
    
//           this.setState({
//             login_Users:responseJson.user
//           });
    
//         })
//         .catch((error) =>{
//           console.error(error);
//         });
//       } 
//     };

    
//     export default login_Users 
     



// const UsersLog = [];
//     fetch ('http://172.16.29.44/wufoodapi/login_api.php')
    
//     .then(response => response.json())
//     .then((responseJson) => {
//         UsersLog = responseJson.user
        
//     }) 

// export default UsersLog


// export default class user {


//     doSignUp = () => {

            
//         fetch('http://172.16.29.44/wufoodapi/login_api.php', {
//         method: 'POST', 
//         body: JSON.stringify({
//             username: this.state.username,        
//             password: this.state.password

//         })
        

//         }).then((response) => response.json())
//         .then((responseData) => {
//         console.log("inside responsejson");
//         console.log('response object:',responseData)

//             }).done();
            
           
//         }

// }