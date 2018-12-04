import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Improvement from './Improvement';
import './PropertyView.css';
import { deleteProperty, getUserProperties } from '../actions';

export class PropertyView extends React.Component {
    componentDidMount() {
        if (this.props.user === null) {
            return window.location.replace("/login")
        } else {
            this.props.dispatch(this.props.getUserProperties(this.props.user))
        }
    }
    deleteProperty() {
        this.props.dispatch(this.props.deleteProperty(this.props.property))
            .then(() => window.history.back());
    }

    render() {
        if (!this.props.property.propertyId) {
            return <Redirect to='/dashboard' />
        }
        const prettify = this.props.prettify;
        const property = this.props.property;
        let improvementCosts = 0;
        const improvements = property.improvements.map((item, index) => {
            improvementCosts += parseInt(item.cost);
            return <Improvement key={`${index}-${item.name}`} data={item} />
        }
        );
        const totalCost = property.price + improvementCosts;
        return (
            <main className="PropertyView">
                <h2>{property.address}</h2>
                <p className="address2">{property.city}, {property.state} {property.zip}</p>
                <div className="ind-property">
                    {property.imgSrc ? <img className="property-img" src={property.imgSrc} alt="picture of property" /> : ""}
                    <div className="prop-info">
                        {property.description ? <p className="short-desc">{property.description}</p> : ""}
                        {property.floorSize ? <p>Floor Size: {prettify(property.floorSize)} ft²</p> : ""}
                        {property.yearBuilt ? <p>Year Built: {property.yearBuilt}</p> : ""}
                        {property.lotSize ? <p>Lot Size: {property.lotSize} acres</p> : ""}
                        {property.price ? <p>Price: ${prettify(property.price)}</p> : ""}
                        {property.stories ? <p>Stories: {property.stories}</p> : ""}
                        {property.bedrooms ? <p>Bedrooms: {property.bedrooms}</p> : ""}
                        {property.bathrooms ? <p>Baths: {property.bathrooms}</p> : ""}
                        {property.basement ? <p>Basement: {property.basement}</p> : ""}
                        {property.foundationType ? <p>Foundation: {property.foundationType}</p> : ""}
                        {property.exteriorMaterial ? <p>Exterior: {property.exteriorMaterial}</p> : ""}
                        {property.roofType ? <p>Roof Material: {property.roofType}</p> : ""}
                        {property.notes ? <p>Additional Notes: {property.notes}</p> : ""}
                        <button><Link to={`/dashboard/${property.slug}/edit`}>Edit Property Details</Link></button>
                        <button onClick={(event) => this.deleteProperty()}>Delete Property</button>
                        <h3>Planned Repairs and Improvements</h3>
                        {improvements}
                        <button><Link to={`/dashboard/${property.slug}/add-improvement`}>Add Improvement</Link></button>

                        {property.price && improvementCosts > 0
                            ?
                            <h3 className="projection">This house flip will cost you ${prettify(totalCost)} total with ${prettify(improvementCosts)} in
    repairs.</h3>
                            :
                            property.price
                                ?
                                <h3 className="projection">This house flip will cost you ${prettify(property.price)}. Add improvements to see the final cost.</h3>
                                :
                                improvementCosts
                                    ?
                                    <h3 className="projection">This house flip will cost you ${prettify(improvementCosts)} in
    repairs. Add a property price to see it reflected in the total cost.</h3>
                                    :
                                    <h3 className="projection">Add a property price and improvements to see your total cost.</h3>
                        }

                    </div>
                </div>
            </main>
        );
    }
};


const mapStateToProps = (state, props) => {
    const thisProperty = state.reducer.properties.find(property => property.slug === props.match.params.slug)
    const prettify = state.reducer.prettify;
    const user = state.auth.currentUser;
    const property = Object.assign(
        {},
        thisProperty
    );
    return {
        user,
        getUserProperties,
        deleteProperty,
        property,
        prettify
    };
};
export default connect(mapStateToProps)(PropertyView);

