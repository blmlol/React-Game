import React, { Component } from "react";
import images from "./images"
import Image from "./Image"
class ImageContainer extends Component {

    state = {
        imageArray: images,
        isClicked: [],
        score: 0
    };

    shuffle = arr => {
        let ceil = arr.length;
        let ind;
        let temp;

        while (ceil > 0) {
            ind = Math.floor(Math.random() * 24);
            ceil--;
            temp = arr[ceil];
            arr[ceil] = arr[ind];
            arr[ind] = temp;
        }
        this.setState({ imageArray: arr })

    }

    shuffled = (e) => {
        e.preventDefault();
        const btnId = e.target.attributes[1].value;
        console.log(btnId);
        this.shuffle(images);
        console.log('shuffled');
    }

    //this.setState({this.state.arr1: [...this.state.arr1, pushedItem]})
    // ^^^ This is how we would handle the 'isClicked' array    


    //Array of image names maybe saved in state and then updated with map



    render() {
        return (
            <div className='container'>

                <div className='row text-center'>
                    <h1> Unique Foodie Clicky</h1>
                </div>
                <div className='row'>




                    {
                        this.state.imageArray.slice(0, 5).map(({ id, src, title }) => <Image onClick={this.shuffled} key={id} id={id} source={src} alt={title} />
                        )
                    }



                </div>

                <div className='row'>




                    {
                        this.state.imageArray.slice(5, 10).map(({ id, src, title }) => <Image onClick={this.shuffled} key={id} id={id} source={src} alt={title} />
                        )
                    }



                </div>

                <div className='row'>




                    {
                        this.state.imageArray.slice(10, 15).map(({ id, src, title }) => <Image onClick={this.shuffled} key={id} id={id} source={src} alt={title} />
                        )
                    }



                </div>

                <div className='row'>




                    {
                        this.state.imageArray.slice(15, 20).map(({ id, src, title }) => <Image onClick={this.shuffled} key={id} id={id} source={src} alt={title} />
                        )
                    }



                </div>

                <div className='row'>

                    {
                        this.state.imageArray.slice(20, 25).map(({ id, src, title }) => <Image onClick={this.shuffled} key={id} id={id} source={src} alt={title} />
                        )
                    }



                </div>


            </div>

        )

    };

}
export default ImageContainer;