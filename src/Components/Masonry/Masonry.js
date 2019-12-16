import React from 'react';
import PropTypes from 'prop-types';
import Block from './Block';
import Masonry from 'react-masonry-component';
import { getRandomColor, getRandomHeight } from '../helpers/helpers';
import _ from 'lodash';
import { withRouter } from 'react-router-dom'
import Modal from './Modal';


class MasonryC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: -1,
            showModal: false
        }
    }

    handleBlockClick = (index) => {
        const { history } = this.props;
        this.setState(() => ({ currentIndex: index, showModal: true }));
        history.push(`/open/${index}`);
    }

    handleModalClose = () => {
        const { history } = this.props;
        this.setState(() => ({ currentIndex: -1, showModal: false }));
        history.push('/');
    };

    componentWillMount() {
        const { location: { pathname } } = this.props;
        let currentIndex = pathname.split('open/')[1];
        let showModal=false
        currentIndex = currentIndex ? Number(currentIndex) : -1;
        if(currentIndex!==-1){
            showModal=true
        }

        this.setState((_st) => ({
            height: _.times(50, () => getRandomHeight()),
            colors: _.times(50, () => getRandomColor()),
            currentIndex,
            showModal
        }), () => {
            console.log(this.state);
        });
    }


    render() {
        const { colors, height, currentIndex } = this.state;
        return (
            <div>
                {this.state.showModal ? <Modal
                    handleModalClose={this.handleModalClose}
                    isActive={currentIndex !== -1}
                    bgColor={colors[currentIndex]}
                /> : <Masonry>
                        {_.times(50, i => (

                            <Block
                                key={30 - i}
                                height={height[i]}
                                backgroundColor={colors[i]}
                                handleClick={() => this.handleBlockClick(i)}
                            />

                        ))}
                    </Masonry>}
            </div>
        );
    }
}

export default withRouter(MasonryC);