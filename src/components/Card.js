import React, { Component } from 'react';

class Card extends Component{
    static defaultProps = {
        name: '',
        url: ''
    }

    onClick(){
        this.props.onClick(this.props.url)
    }

    render(){
        return (
            <div className='card' style={styles.wrapper} onClick={this.onClick.bind(this)}>
                <div>{this.props.name}</div>
            </div>
        )
    }

}

export default Card

const styles = {
    wrapper: {
        width: '200px',
        height: '100px',
        backgroundColor: '#F1F1F1',
        margin: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        cursor: 'pointer'
    },
    info: {
        position: 'absolute', 
        background: 'rgba(0,0,0,0.5)', 
        width: '100%'
    }
}