import React, {Component} from 'react';
import './preview-collection.styles.scss';
import CollectionItem from '../collection-item/collection-item';

const PreviewCollection = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items.filter((item, index) => index < 4).map(({
                id,
                ...otherItemPros
            }) => (<CollectionItem key={id} { ...otherItemPros }/>))
}
        </div>
    </div>
)

export default PreviewCollection;