import * as React from "react";
import PropTypes from "prop-types";

import "../styles/Country.css";

function Country({ name, capital}) {
    const [selected, changeSelected] = React.useState(false);

    return (
        <tr className={selected ? "selected-country": ""}>
            <td>{ name }</td>
            <td>{ capital }</td>
            <td>
                {selected ?
                    <button onClick={() => changeSelected(false)}>Remove</button>:
                    <button onClick={() => changeSelected(true)}>Add</button>
                }
            </td>
        </tr>
    )
};
Country.defaultProps = {
    capital: "Not Available"
}

//Country.propType = {
//    country: PropTypes.object
//};

export default Country;