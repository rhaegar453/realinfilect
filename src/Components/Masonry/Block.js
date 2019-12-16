import React from 'react';
import PropTypes from 'prop-types';

const Blocks = ({ backgroundColor, height, handleClick }) => (
    <div
        style={{backgroundColor:backgroundColor, height:height, width:'200px', margin:"5px", borderRadius:"5px"}}
        onClick={handleClick}
        onKeyDown={handleClick}
        role="link"
    ></div>
);

Blocks.propTypes = {
    backgroundColor: PropTypes.string,
    height: PropTypes.string,
    handleClick: PropTypes.func,
};


export default Blocks;
