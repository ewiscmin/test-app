// Generated by https://pagedraw.io/pages/11695
import React from 'react';
import './button.css';


function render() {
    return <div className="button-button-1" style={{"cursor": (this.props.text3)}}>
        <div className="button-0">
            <div onClick={() => this.props.handleClick("Hello")} className="button-path-3">
                <div className="button-0-0-0">
                    <div className="button-hello_world-1">Hello world</div>
                </div>
            </div>
        </div>
        <div className="button-1">
            <input type="text" placeholder={this.props.text4} value={this.props.text2} onChange={() => this.props.handleChange()} className="button-textinput-0" /> 
        </div>
        <div className="button-2" /> 
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}
