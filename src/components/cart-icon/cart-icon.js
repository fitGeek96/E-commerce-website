import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {ReactComponent as ShoppingIcon} from '../../assets/11.2 shopping-bag.svg.svg'
import './cart-icon.styles.scss'
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {selectCartItemsCount} from '../../redux/cart/cart.selector'

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">
            {itemCount}
        </span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({itemCount: selectCartItemsCount});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
