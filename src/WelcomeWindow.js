import Clock from 'react-live-clock';
import bg from './bg-welcome-window.jpg';
import tapIcon from './tap.png';

function WelcomeWindow(props) {
    const bgStyle = {
      backgroundImage: 'url(' + bg + ')',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    };
    return props.show ? (
        <div className="bg-welcome-window" style={bgStyle}>
          <div className="welcome-content">
            <div className="welcome-content__timer">
              <Clock format={'HH:mm'} ticking={true} />
            </div>
            <div className="welcome-content__description">
              <h1>Информационный стенд О!Подворье</h1>
              <p>Для продолжения коснитесь экрана</p>
            </div>
            <img className="tap-icon" src={tapIcon} alt="icon tap touch display"></img>
          </div>
        </div>
      ) : (
        null
    );
}

export default WelcomeWindow;