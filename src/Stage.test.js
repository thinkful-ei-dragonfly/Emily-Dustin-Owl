import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Stage from './Stage';



describe('Stage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    // eslint-disable-next-line react/jsx-pascal-case
    ReactDOM.render(<Stage participants={[
      {
        id: 1,
        name: 'Koren Templeton',
        avatar:
          'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: true
      },
      {
        id: 2,
        name: 'Caty Flucker',
        avatar:
          'https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: false
      },
    ]}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expexted', () => {
    const tree = renderer
      // eslint-disable-next-line react/jsx-pascal-case
      .create(<Stage participants={[
        {
          id: 1,
          name: 'Koren Templeton',
          avatar:
            'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
          inSession: true,
          onStage: true
        },
        {
          id: 2,
          name: 'Caty Flucker',
          avatar:
            'https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1',
          inSession: true,
          onStage: false
        },
      ]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});