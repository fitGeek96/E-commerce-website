import React from 'react';
import {Route, Switch} from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview'
import Collection from '../collection/collection';

const ShopPage = ({match}) => {

    console.log(match.path);

    return (
        <div className='shop-page'>
            <Switch>
                <Route exact path={`${match.path}/:collectionId`} component={Collection}/>
                <Route exact path={`${match.path}`} component={CollectionsOverview}/>
            </Switch>
        </div>
    )
}

export default ShopPage;