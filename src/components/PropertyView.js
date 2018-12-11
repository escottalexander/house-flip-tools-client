import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Improvement from './Improvement';
import AnalysisModal from './AnalysisModal'
import './PropertyView.css';
import { deleteProperty, getUserProperties, showAnalysis } from '../actions';

export class PropertyView extends React.Component {
    componentDidMount() {
        if (this.props.user === null) {
            return window.location.replace("/login")
        } else {
            this.props.dispatch(this.props.getUserProperties(this.props.user));
        }
    }
    deleteProperty() {
        this.props.dispatch(this.props.deleteProperty(this.props.property))
            .then(() => window.history.back());
    }

    showAnalysis() {
        this.props.dispatch(this.props.showAnalysis());
    }

    render() {
        if (!this.props.property.propertyId || this.props.match.params.slug !== this.props.property.slug) {
            return <Redirect to='/dashboard' />
        }
        const prettify = this.props.prettify;
        const property = this.props.property;
        const improvements = property.improvements.map((item, index) => {
            return <Improvement key={`${index}-${item.name}`} data={item} />
        }
        );
        return (
            <main className="PropertyView">
                <div className="header">
                    <h2 className="address-one">{property.address}</h2>
                    <p className="address-two">{property.city}, {property.state} {property.zip}</p>
                </div>
                <div className="ind-property">
                    {property.description ? <p className="short-desc">{property.description}</p> : ""}
                    <section className="property-info">
                        <div className="two-thirds">
                            {property.imgSrc ? <img className="property-img" src={property.imgSrc} alt="the property" /> : ""}
                        </div>
                        <div className="third">
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
                        </div>
                    </section>
                    {property.notes ? <p>Additional Notes: {property.notes}</p> : ""}
                    <button><Link to={`/dashboard/${property.slug}/edit`}>Edit Property Details</Link></button>
                    <button className="delete-btn" onClick={(event) => this.deleteProperty()}>Delete Property</button>
                    <h3>Planned Repairs and Improvements</h3>
                    {improvements}
                    <button><Link to={`/dashboard/${property.slug}/add-improvement`}>Add Improvement</Link></button>

                    {property.price && improvements.length > 0
                        ?
                        <h3 className="projection">Click the button below to analyze your property.</h3>
                        :
                        property.price
                            ?
                            <h3 className="projection">Add improvements to see the analysis of your property.</h3>
                            :
                            improvements.length > 0
                                ?
                                <h3 className="projection">Add a property price to see the analysis of your property.</h3>
                                :
                                <h3 className="projection">Add a property price and improvements to see the analysis of your property.</h3>
                    }
                    {
                        property.price && improvements.length > 0 ? <button className="analyze" onClick={() => this.showAnalysis()}>Analyze My Property</button> : <button className="analyze-disabled">Analyze My Property</button>
                    }

                </div>
                {this.props.analysisVisible ? <AnalysisModal data={property} /> : ""}
            </main>
        );
    }
};


const mapStateToProps = (state, props) => {
    const thisProperty = state.reducer.properties.find(property => property.slug === props.match.params.slug)
    const prettify = state.reducer.prettify;
    const user = state.auth.currentUser;
    const analysisVisible = state.reducer.analysisVisible;
    const property = Object.assign(
        {},
        thisProperty
    );
    return {
        user,
        analysisVisible,
        showAnalysis,
        getUserProperties,
        deleteProperty,
        property,
        prettify
    };
};
export default connect(mapStateToProps)(PropertyView);

