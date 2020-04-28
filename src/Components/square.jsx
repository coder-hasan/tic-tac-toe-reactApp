import React from 'react'

class Square extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.props.onClick}>
                    {this.props.value}
                </button>
            </div>
        )
    }
}

export default Square;