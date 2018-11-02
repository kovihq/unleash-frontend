import React from 'react';
import PropTypes from 'prop-types';
import { Menu, MenuItem, IconButton } from 'react-mdl';

class AddStrategy extends React.Component {
    static propTypes = {
        strategies: PropTypes.array.isRequired,
        addStrategy: PropTypes.func,
        uniqueId: PropTypes.string,
    };

    addStrategy(strategyName) {
        const selectedStrategy = this.props.strategies.find(s => s.name === strategyName);
        const parameters = {};

        selectedStrategy.parameters.forEach(({ name }) => {
            parameters[name] = '';
        });

        this.props.addStrategy({
            name: selectedStrategy.name,
            parameters,
        });
    }

    stopPropagation(e) {
        e.stopPropagation();
        e.preventDefault();
    }

    render() {
        const menuStyle = {
            maxHeight: '300px',
            overflowY: 'auto',
            backgroundColor: 'rgb(247, 248, 255)',
        };
        return (
            <div style={{ position: 'relative' }}>
                <IconButton name="add" id={`strategies-add-${this.props.uniqueId}`} />
                <Menu
                    target={`strategies-add-${this.props.uniqueId}`}
                    valign="bottom"
                    align="right"
                    ripple
                    style={menuStyle}
                >
                    {this.props.strategies.map(s => (
                        <MenuItem key={s.name} title={s.description} onClick={() => this.addStrategy(s.name)}>
                            {s.name}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        );
    }
}

export default AddStrategy;
