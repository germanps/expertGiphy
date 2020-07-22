import React, {useState} from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
    
    const [inputValue, setInputValue] = useState('');

    const handleChangeValue = (e) => {
        setInputValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if( inputValue.trim().length > 2){
            setCategories( cats => [inputValue, ...cats]);
            //reset input
            setInputValue('');
        }
    }

    return (
        <div className="addCategory">
            <form onSubmit={ handleSubmit }>
                <input 
                    type="text"
                    value={ inputValue }
                    onChange={ handleChangeValue }
                />
            </form>
        </div>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;