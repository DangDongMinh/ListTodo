import React from 'react';



class Taskitem extends React.Component {

    constructor(props) {
        super(props);
        this.typeSort = 'up'
    }

    handleColumClick (column) {
        switch (this.typeSort) {
            case 'up':
                 this.props.handleSort(`${column}up`);
                 this.typeSort = 'down';
                break;
            case 'down':
                 this.props.handleSort(`${column}down`);
                 this.typeSort = 'up';
                break;
            default:
                break;
        }
    }    
    
   
    render () {
        
        return (
            <thead>
                <tr>
                    <th className="text-center">ID</th>
                    <th className="text-center" onClick={ this.handleColumClick.bind(this,'price') }>PRICE</th>
                    <th className="text-center" onClick={ this.handleColumClick.bind(this, 'size') }>SIZE</th>
                    <th className="text-center">FACE</th>
                    <th className="text-center" onClick={ this.handleColumClick.bind(this, 'date') }>DATE</th>
                </tr>
            </thead>
        );
    }
}

export default Taskitem;