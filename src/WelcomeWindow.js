import bg from './bg-welcome-window.jpg'
function WelcomeWindow(props) {
    return props.show ? (
        <div><img src={bg} className="bg-welcome-window true"></img></div>
      ) : (
        null
    );
}

export default WelcomeWindow;