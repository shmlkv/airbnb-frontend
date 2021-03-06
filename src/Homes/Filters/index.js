import React from 'react';
import styled from 'styled-components';

import Dates from './Dates';
import Guests from './Guests';
import RoomType from './RoomType';
import Price from './Price';
import Instant from './Instant';
import MoreFilters from './MoreFilters';

const Box = styled.div`
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
  position: fixed;
  top: 80.5px;
  right: 0;
  left: 0;
  background: white;
  z-index: 1;
`;

const Container = styled.div`
  max-width: 966px;
  margin: 0 auto;
  clear: both;
  display: flex;
  box-sizing: border-box;
  padding-left: 0.5rem;
`;

class Filters extends React.Component {
  state = {
    opened: null,
  };

  setOpened = (opened) => {
    this.setState({ opened: this.state.opened === opened ? null : opened });
  };

  render() {
    return (
      <Box>
        <Container>
          <Dates
            closeDropdown={() => this.setOpened(null)}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onApply={(startDate, endDate) => this.setState({ startDate, endDate })}
          />
          <Guests />
          <RoomType className="hidden-xs hidden-sm hidden-md" />
          <Price className="hidden-xs hidden-sm hidden-md" />
          <Instant className="hidden-xs hidden-sm hidden-md" />
          <MoreFilters />
        </Container>
      </Box>
    );
  }
}

export default Filters;
