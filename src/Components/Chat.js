import React ,{ useState ,useEffect} from 'react'
import io from "socket.io-client";
import ScrollToBottom from "react-scroll-to-bottom";
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios';
import MyMessage from './MyMessage';
import "./BasicOfChat.css"

const socket = io.connect("http://localhost:5000");


let room = ""
const hiddChaild=true
export default function Chat() {
  const [username, setUsername] = useState("");
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const {name,id}=useParams()
console.log(id,name);

      const token = useSelector((state) => state.tokenX.token)
    const userId = useSelector((state) => state.tokenX.userId);
    const userName = useSelector((state) => state.tokenX.userName);


  useEffect(() => {
    console.log(id,"xxxx");
    if(id>userId){
      const sum=id+userId
    room = sum

    }else{
      const sum=userId+id
      room = sum
  
    }


    const getMsg=async()=>{
      console.log(room,"inget");
      const res1= await axios.get(`http://localhost:5000/getChat/${room}`)
      console.log(res1.data,"llllllllllllllllll");
      if (res1.data === null) {
        setMessageList([])
      }else{
        setMessageList(res1.data.chatArr)
      }
    }
      getMsg()
    setUsername(userName)

    const joinRoom = () => {
      console.log(room ,"room");
      if (room !== "") {
        socket.emit("join_room", room);
      }
    };
    joinRoom()
  /////////////////////

  }, [])



  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author:userName ,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      


      const res= await axios.post("http://localhost:5000/saveChat",{
        room: room,
        userName:userName ,
        message: currentMessage,
        recipient:id,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      },
        { headers: { authorization: `Bearer ${token}` },
      })
      console.log(res.data);

      await socket.emit("send_message", messageData);
      setMessageList( [...messageList, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);



  return (
  <div className="App">

   {/* {hiddChaild?(  */}
   <div className="chat-window">


    <div className="chat-header">
      <p>Live Chat</p>
    </div>
    <div className="chat-body">
      <ScrollToBottom className="message-container">
        {messageList.map((messageContent) => {
      
          return (
            
          
          
            <div
              className="message"
              id={username === messageContent.author ? "you" : "other"&&userId === messageContent.userId ? "you" : "other"}
            >
            
              <div>
                <div className="message-content">
                  <p>{messageContent.message}</p>
                </div>
                <div className="message-meta">
                  <p id="time">{messageContent.time}</p>
                  <p id="author">{messageContent.author}</p>
                </div>
              </div>
            </div>
          );
        })}
      </ScrollToBottom>
    </div>
    <div className="chat-footer">
      <input
        type="text"
        value={currentMessage}
        placeholder="Sand Message..."
        onChange={(event) => {
          setCurrentMessage(event.target.value);
        }}
        onKeyPress={(event) => {
          event.key === "Enter" && sendMessage();
        }}
      />
      <button onClick={sendMessage}>&#9658;</button>
    </div>
  </div>


 

   </div>
)}
