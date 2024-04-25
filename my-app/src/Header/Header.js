import {PropTypes} from 'prop-types'

function Header(props)
{
    var counter=0
    const increment= ()=>{
counter=counter+1
console.log(counter)
    }
    const decrement= ()=>{
        counter=counter-1
        console.log(counter)
            }
           
    return(
        
        <div>
        {/*{}->binding}*/}
<h1>{props.pfname}-{props.plname}-{props.page}</h1>
        <h1>This is Functional Component</h1>
        <h1>{counter}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>

            <h1>This is my Header Component</h1>
        </div>
    )
}
Header.propTypes={
fname:PropTypes.string,
lname:PropTypes.string,
page:PropTypes.number

}
export default Header