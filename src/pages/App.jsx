import { useNavigate } from "@solidjs/router";
import { View } from "@lightningjs/solid";
import { useFocusManager, useAnnouncer } from "@lightningjs/solid-primitives";

const App = (props) => {
  useFocusManager({
    Announcer: ["a"],
    Menu: ["m"],
    Text: 't',
    Buttons: 'b',
    Escape: ["Escape", 27],
    Backspace: ["Backspace", 8],
    Left: ["ArrowLeft", 37],
    Right: ["ArrowRight", 39],
    Up: ["ArrowUp", 38],
    Down: ["ArrowDown", 40],
    Enter: ["Enter", 13],
  });
  
  const navigate = useNavigate();
  const announcer = useAnnouncer();
  announcer.debug = false;
  announcer.enabled = false;

  return (
    <View ref={window.APP}
      onAnnouncer={() => announcer.enabled = !announcer.enabled}
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
