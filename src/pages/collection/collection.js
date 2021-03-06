import React from 'react';
import {connect} from 'react-redux';
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {selectCollection} from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item'
import './collection.scss';

const Collection = ({collection}) => {

    const {title, items} = collection;

    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className="items">
                {items.map(item => <CollectionItem key={item.id} item={item}/>)
}
            </div>
        </div>
    )
}

const mapStateToProps = (state, props) => ({
    collection: selectCollection(props.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection);