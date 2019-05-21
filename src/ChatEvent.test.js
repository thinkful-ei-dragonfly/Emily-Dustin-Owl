import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatEvent from './ChatEvent';



describe('Chat Event component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatEvent 
      key = {0} 
      participantId={2} 
      type={'message'}
      time={1548852544247}
      message={'Hello'}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expexted', () => {
    const tree = renderer
      .create(<ChatEvent 
        key={0} 
        participantId={2} 
        type={'message'}
        time={1548852544247}
        message={'Hello'}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});