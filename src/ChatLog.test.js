import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatLog from './ChatLog';



describe('Chat Log component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    // eslint-disable-next-line react/jsx-pascal-case
    ReactDOM.render(<ChatLog chatEvents={[
      {
          participantId: 3,
          type: 'message',
          message: 'Hello world',
          time: 1548852646559,
          timestamp: 1548852484247
      },
      {
          participantId: 2,
          type: 'thumbs-up',
          timestamp: 1548852484247
      },
      {
          participantId: 4,
          type: 'thumbs-down',
          timestamp: 1548852484247
      }]}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expexted', () => {
    const tree = renderer
      // eslint-disable-next-line react/jsx-pascal-case
      .create(<ChatLog chatEvents={[
        {
            participantId: 3,
            type: 'message',
            message: 'Hello world',
            time: 1548852646559,
            timestamp: 1548852484247
        },
        {
            participantId: 2,
            type: 'thumbs-up',
            timestamp: 1548852484247
        },
        {
            participantId: 4,
            type: 'thumbs-down',
            timestamp: 1548852484247
        }]}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});