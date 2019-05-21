import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import StageAvatar from './StageAvatar';



describe('List component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StageAvatar
      key={4} name={'name'} 
      avatar={'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1'}
      onStage={true}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expexted', () => {
    const tree = renderer
    .create(<StageAvatar key={4} 
        name={'name'} 
        avatar={'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1'}
        onStage={true} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});