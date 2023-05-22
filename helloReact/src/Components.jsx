import './Components.css'
function Component({src, alt, h3, text}) {
    return(<div className="component-container">
            <img src={src} alt={alt} />
            <h3>{h3}</h3>
            <p>{text}</p>
        </div>)
}


export default Component;