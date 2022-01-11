// import React  ,{ useState ,useEffect}from 'react'
// import io from "socket.io-client";
// import Chat from './Chat';
// import "./BasicOfChat.css"
// import { useSelector } from "react-redux";


// const socket = io.connect("http://localhost:5000");

// export default function BasicOfChat(id) {

//     const recipient=id.id
//     // console.log(recipient,"recipient");
//     const [username, setUsername] = useState("");
//     const [room, setRoom] = useState("");
//     const [showChat, setShowChat] = useState(false);
  
    
//     const token = useSelector((state) => state.tokenX.token);
//     const userId = useSelector((state) => state.tokenX.userId);
//     const userName = useSelector((state) => state.tokenX.userName);


//     const joinRoom = () => {
//       console.log("click");
//       if (username !== "" && room !== "") {
//         socket.emit("join_room", room);
//         setShowChat(true);
//       }
//     };

//     useEffect(() => {
//        setRoom(8)
//        setUsername(userName)
//     }, [])


// console.log(room ,userName);


//     return (
//         <div className="App">
//       {!showChat ? (
//         <div className="joinChatContainer">
//           <h3>Join A Chat</h3>
//           {/* <input
//             type="text"
//             placeholder="John..."
//             onChange={(event) => {
//               setUsername(event.target.value);
//             }}
//           /> */}
//           {/* <input
//             type="text"
//             placeholder="Room ID..."
//             onChange={(event) => {
//               setRoom(event.target.value);
//             }}
//           /> */}
//           <button onClick={joinRoom}>Join A Room</button>
//         </div>
//       ) : (
//         <Chat socket={socket} username={username} room={room} recipient={recipient}/>
//       )}
//     </div>
//     )
// }
