import React from 'react';
import Column from './Column';

const Table = () => {
    return (
        <React.Fragment>
            <table>
                <tbody>
                    <tr>
                        <Column />
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
    );
}

export default Table;
