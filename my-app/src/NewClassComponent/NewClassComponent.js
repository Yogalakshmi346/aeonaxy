import React, {Component} from "react";

class NewClassComponent extends Component
{
    constructor(props){
        console.log("I am constructor")
        super()
        this.state={counter:0}

    }
    static getDerivedStateFromProps(){
        console.log("I am getDerivedStateFromProps ")
        return true
    }
    componentDidMount()
    {
        console.log("I am componentDidMount")
    }

    increment=()=>{
        this.setState({counter:this.state.counter+1})
        console.log(this.state.counter)
    }
    decrement=()=>{
        this.setState({counter:this.state.counter-1})
        console.log(this.state.counter)
    }
    shouldComponentUpdate(){
        console.log("I am shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log("I am getSnapshotBeforeUpdate")
        return true
    }
    componentDidUpdate(){
        console.log("I am componentDidUpdate")
    }
    componentWillUnmount(){
        console.log("unmount")
    }

    render(props){
        console.log("I am render")
        return(
            <div>
                <h1>This is class component</h1>
                <h1>{this.props.pfname}-{this.props.plname}-{this.props.page}</h1>
                <h1>{this.state.counter}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>

            </div>
        )
    
}
}
export default NewClassComponent

// life cycle  methods of class component
// there are 3types of lifecycle methods
// 1.Mounting-mounting is a stage of rendering the jsx return by the render method
// 2.Updating-updating is a stage of when the state of the component is updated and the application is rerender
// 3.Unmounting-component is removed from the page

// Mounting
// 1.constructor()
// 2.static getDerivedStateProps()
// 3.render()
// 4.componentDidMount()


// Updating
// 1.getDerivedStateProps()
// 2.shouldComponentUpdate()
// 3.render()
// 4.getSnapshotBeforeUpdate()
// 5.componentDidUpdate()

// Unmounting
// 1. componentWillUnmount()

// props types
// String
// number

// default props
