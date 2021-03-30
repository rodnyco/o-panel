function WelcomeWindow(props) {
    return props.show ? (
        <div>Hello window true</div>
      ) : (
        null
    );
}

export default WelcomeWindow;