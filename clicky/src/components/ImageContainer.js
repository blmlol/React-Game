import React, { Component } from "react";
import images from "./images"
import Image from "./Image"
class ImageContainer extends Component {

    state = {
        imageArray: images
    };

    //Shuffle images around


    //Array of image names maybe saved in state and then updated with map



    render() {
        return (
            <div className='container'>

                <div className='row text-center'>
                    <h1> Unique Food Clicker</h1>
                </div>
                <div className='row'>




                    {
                        this.state.imageArray.slice(0, 5).map(({ id, src, title }) => <Image id={id} source={src} alt={title} />
                        )
                    }



                </div>

                <div className='row'>




                    {
                        this.state.imageArray.slice(5, 10).map(({ id, src, title }) => <Image id={id} source={src} alt={title} />
                        )
                    }



                </div>

                <div className='row'>




                    {
                        this.state.imageArray.slice(10, 15).map(({ id, src, title }) => <Image id={id} source={src} alt={title} />
                        )
                    }



                </div>

                <div className='row'>




                    {
                        this.state.imageArray.slice(15, 20).map(({ id, src, title }) => <Image id={id} source={src} alt={title} />
                        )
                    }



                </div>

                <div className='row'>

                    {
                        this.state.imageArray.slice(20, 25).map(({ id, src, title }) => <Image id={id} source={src} alt={title} />
                        )
                    }



                </div>


            </div>

        )

    };

}
export default ImageContainer;