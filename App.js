import react from 'react';
import ReactDOM from 'react-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));

const Heading = () => {
    return (
        <h1>Hello</h1>
    )
}

root.render(<Heading/>);