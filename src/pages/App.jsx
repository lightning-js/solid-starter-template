import { useNavigate } from "@solidjs/router";
import { View } from "@lightningjs/solid";
import { useFocusManager } from "@lightningjs/solid-primitives";

const App = (props) => {
  useFocusManager({
    Menu: 'm',
    Text: 't',
    Buttons: 'b',
  });
  const navigate = useNavigate();

  return (
    <View ref={window.APP}
      onLast={() => history.back()}
      onText={() => navigate('/text')}
      onButtons={() => navigate('/buttons')}
      onMenu={() => navigate('/')}>
        <View color={0x071423ff} />
        {props.children}
    </View>
  )
};

export default App;
