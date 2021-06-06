import React from 'react';

import '../assets/Table.css';
import numeral from 'numeral';


function Table({countries}) {
    return (
        <div className="table">
            <table className="tableElm">
            {countries.map(({country, cases}) => (
                <tr key={country}>
                    <td>{country}</td>
                    <td>
                        <strong>{numeral(cases).format("0,0")}</strong>
                    </td>
                </tr>
            ))}
            </table>
        </div>
    )
}

export default Table
