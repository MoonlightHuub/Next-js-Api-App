import Nav from './nav';

function Container(props){
    return(
        <div>
            <Nav />
            {props.children}
        </div>
    )
}

export default Container;