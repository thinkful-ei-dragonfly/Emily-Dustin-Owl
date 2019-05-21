import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Participant from './Participant';



describe('List component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Participant key={4} name={'name'} avatar={'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1'}
      inSession={true} onStage={true}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expexted', () => {
    const tree = renderer
      .create(<Participant key={4} name={'name'} avatar={'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1'}
        inSession={true} onstage={true} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});