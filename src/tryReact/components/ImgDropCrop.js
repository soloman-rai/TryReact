import React, {Component} from 'react';

import Dropzone from 'react-dropzone'; // a div tag that triggers the file upload where the file can be gragged


class ImgDropCrop extends Component {
    render() {
        return(
            <div>
                <h1>Image Drop and Crop</h1>
                <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                {({getRootProps, getInputProps}) => (
                    <section>
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p>Drag 'n' drop some files here, or click to select files</p>
                    </div>
                    </section>
                )}
                </Dropzone>
            </div>
        )
    }
}

export default ImgDropCrop 