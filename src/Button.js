// Below, the 'children' prop is used to access the emojis and pre/next content (above) for the button elements.

//% The 'children' prop is accessible to each react component. It's used to access the content between the opening (<Button>) and closing tag (</Button>)


export default function Button({onClick, children}) {

    const buttonStyle = {backgroundColor: '#7950f2', color: '#fff'}

    return (
      <button style={buttonStyle} onClick={onClick}>
        {children}
      </button>
    )
  }