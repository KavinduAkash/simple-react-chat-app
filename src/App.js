import React from 'react';
import './App.css';
import Message from "./Message";
import {Button, Icon, Input} from "semantic-ui-react";
import firebase from "firebase/app";
import db from './Firebase';

class App extends React.Component{

    state = {
        message: "",
        message_arr: [
            {
                username:'jhone',
                message: 'hello!',
                timestamp: '20:00:00'
            }
        ],
        user:""
    };

    componentDidMount() {
        this.setState({
            user: prompt("What is your username?")
        });

        console.log("UNM");
        db.collection('messages').orderBy('timestamp').onSnapshot(snapshot => {
            this.setState({message_arr: []})
            snapshot.docs.map(doc=>{
                console.log("M: ",doc);
                this.setState({message_arr: [...this.state.message_arr, doc.data()]})
            })
        })
    }



    sendMessage = (event) => {
        event.preventDefault();
        if(this.state.message!=="") {
            let obj = {
                username: this.state.user,
                message: this.state.message,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            };

            db.collection('messages').add({
                username: this.state.user,
                    message: this.state.message,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });

            // let arr = this.state.message_arr;
            // arr.push(obj);
            // this.setState({
            //     // message_arr: [...this.state.message_arr,obj],
            //     message_arr: arr,
            //     message: ""
            // });
        } else {
            alert("Please, Enter a message!")
        }
    };

  render() {
      let message_arr = this.state.message_arr;
    return(
        <div className={'chat-body'}>
            <div className={'x'}>
                <h2>Simple React Messenger App</h2>
            </div>
            <div className={'text-center'}>
                <form>
                    <div>
                        <Input type="text" value={this.state.message} onChange={event=>this.setState({message:event.target.value})}/>
                        <Button circular onClick={this.sendMessage} icon='send'></Button>
                    </div>
                </form>
                <div className={'all-msg'}>
                    {
                        message_arr.map(res=><Message user={this.state.user} data={res}/>)
                    }
                </div>
            </div>
        </div>
    )
  };
}

export default App;
