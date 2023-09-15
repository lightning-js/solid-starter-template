import { Route, Routes, useNavigate } from "@solidjs/router";
import { useFocusManager, View} from "@lightningjs/solid";
import HelloWorld from './HelloWorld';
import TextPage from './Text';
import ButtonsPage from './ButtonsPage';
import NotFound from './NotFound';

const App = () => {
  useFocusManager();
  const navigate = useNavigate();

  return (
    <View ref={window.APP}
    aria-label={'Hello World'}
    onLast={() => history.back()}
    onText={() => navigate('/text')}
    onButtons={() => navigate('/buttons')}
    onMenu={() => navigate('/')} style={{ width: 1920, height: 1080 }}>
      <View color="#071423" style={{ width: 1920, height: 1080 }} />
      <Routes>
        <Route path="/" component={HelloWorld} />
        <Route path="/text" component={TextPage} />
        <Route path="/buttons" component={ButtonsPage} />
        <Route path="/*all" component={NotFound} />
      </Routes>
    </View>
  )
};

export default App;
