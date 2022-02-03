import React, {Component} from "react";
import Title from './Title'
import PhotoWall from "./PhotoWall";

class Main extends Component{
  
    constructor(){
      super()
      this.state = {
        posts: [{
                    id : "0",
                    description: "foto0",
                    imageLink: "https://i.ytimg.com/vi/RQkWvoES_uQ/maxresdefault.jpg"
                },{
                    id : "1",
                    description: "foto1",
                    imageLink: "https://i.pinimg.com/originals/76/b9/8e/76b98ea1deac8599cbd0065b34403a81.jpg"
                },{
                    id : "2",
                    description: "foto2",
                    imageLink: "https://image.winudf.com/v2/image1/Y29tLmN1dGVhbmltYWxzX3NjcmVlbl8wXzE1NDE0OTM1MjRfMDQy/screen-0.jpg?fakeurl=1&type=.jpg"
                }]
      }
      this.removePhoto = this.removePhoto.bind(this);
      console.log("constructor")
    }

    removePhoto(postRemoved){
      console.log(postRemoved.description)
      this.setState((state) => ({
        posts: state.posts.filter(post => post !== postRemoved)
      }))
    }

    componentDidMount(){
      console.log("componentDidMount")
    }

    componentDidUpdate(prevProps, prevState){
      alert('re-render')
      console.log(prevProps)
      console.log(prevState)
    }

    render(){
      console.log("render")
      return <div>
        <Title title={'Photowall'}/>
        <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto}/>
      </div>
    }
  }

  export default Main