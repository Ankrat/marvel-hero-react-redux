import { connect } from "react-redux";
import { fetchHero } from "../actions";

import HerosListComponent from "../components/heroList_component";

const mapStateToProps = state => {
    return {
        herosList: state.reducerHeros.herosList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onHeroClick: id => {
            dispatch(fetchHero(id));
        }
    };
};

const HeroContainer = connect(mapStateToProps, mapDispatchToProps)(
    HerosListComponent
);

export default HeroContainer;
