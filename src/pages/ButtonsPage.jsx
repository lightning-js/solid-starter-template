import { Row, View, Text } from '@lightningjs/solid';

const ButtonsPage = () => {
  function onEnter(event, elm) {
    this.states.toggle('disabled');
  }

  const RowStyles = {
    display: 'flex',
    justifyContent: 'flexStart',
    width: 1500,
    height: 300,
    color: '00000000',
    gap: 26,
    y: 400,
    x: 100
  }

  const ButtonStyle = {
    width: 386,
    height: 136,
    color: '#715cab',
    focus: {
      color: '#5a39a2',
    },
    disabled: {
      color: '#291d43',
    }
  };

  const ButtonText = {
    fontSize: 32,
    lineHeight: ButtonStyle.height,
    contain: 'width',
    textAlign: 'center',
    mountY: -0.35,
    color: '#F6F6F9',
    height: ButtonStyle.height,
    width: ButtonStyle.width,
    focus: {
      fontSize: 42
    }
  }

  const RoundedRectangle = ['RoundedRectangle', { radius: 65 }];
  function Button(props) {
    return (
      <View {...props} forwardStates animate
        style={ButtonStyle} shader={RoundedRectangle}>
        <Text style={ButtonText}>{props.children}</Text>
      </View>
    );
  }

  return (
    <Row style={RowStyles}>
      <Button autofocus onEnter={onEnter}>Focused</Button>
      <Button states={{ active: true, disabled: false }}>Normal</Button>
      <Button states='disabled'>Disabled</Button>
    </Row>
  );
};

export default ButtonsPage;
