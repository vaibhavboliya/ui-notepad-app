import React, { Component } from 'react';
import { MdKeyboardArrowDown,MdAttachFile,MdSend } from "react-icons/md";
import {Link} from "react-router-dom"
import './AddNote.css'

class AddNote extends Component {
    constructor (props) {
        super(props);
        this.state = {
            
          posts:[{
              user:"Teacher",
              time:"12.40pm",
              content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, amet dolores. Dolorem ipsa culpa, nisi veniam aliquid odio repellendus maxime corporis, impedit aut excepturi natus unde sequi aperiam harum consequatur!",
              comment:["Hello"]
          },{
              user:"User",
              time:"12.40pm",
              content:"aperiam harum consequatur!"
          },{
            user:"User",
            time:"12.40pm",
            content:"aperiam harum consequatur!"
        }
        ],
          newpost:[],
          comments:[]
        }
      }
      handleSubmit= (e)=>{
        e.preventDefault();
        const posts = [...this.state.posts,{
            user:"UserName",
            time:"12.40pm",
        content:this.state.newpost}];
        this.setState({posts,newpost:''});
      }
    render () {
        const renderPost =(t,i)=>(
            <div className="post" key={i}>
                <div className="postDetails">

                
          <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80" className="userpic" alt=""/>
          <div className="postContent">
              <div className="userDetail">
                  <span style={{"fontSize": "17px","lineHeight": "20px"}}>{t.user}</span>
                  <span style={{"fontSize":"15px","lineHeight": "20px", "color":"#868686" }}>{t.time}</span>
              </div>
              <p className="userContent">{t.content}</p>
              </div>

          </div>
          { t.comment && <div className="comment">
          <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80" height="42px" width="42" style={{"borderRadius":"10px"}} alt=""/>
              <input type="text" placeholder="Write a comment.." value={comments} onChange={(e)=>{this.setState({comments:e.target.value})}} className="commentInput"/>
              <MdSend onClick={()=>(alert('You clicked '))} className="sendIcon"/>
              </div>}
           </div>
        )
        const {newpost, comments} = this.state;
    const posts = this.state.posts.map((t,i)=>(
      renderPost(t,i)
    ))
        
        return (
            <div className="AddNote-Container">

            <div className="AddNote">
                <textarea className="textarea" required value={newpost} onChange={(e)=>{this.setState({newpost:e.target.value})}} placeholder="Share something with your class.."/>
                <div className="optionContainer">

                <Link to="/"><span className="cancel">Cancel</span></Link> 
                <div className="rightContainer">
                <MdAttachFile  className="attachIcon"/>
                <div onClick={this.handleSubmit} className="share">
                    <span className="shareText">
                         Share
                        </span>
                
                </div>
                <MdKeyboardArrowDown  className="downIcon"/>
                </div>

                </div>
            </div>
            {posts}
          
            </div>
        )
    }
}

export default AddNote