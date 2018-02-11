import { connect } from "react-redux";
import { fetchHero } from "../actions";

import HeroSingle from "../components/heroSingle_component";

const mapStateToProps = (state, ownProps) => {
    return {
        heroData: state.reducerHero.heroData[0]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onHeroClick: id => {
            dispatch(fetchHero(id));
        }
    };
};

const HeroSingleContainer = connect(mapStateToProps, mapDispatchToProps)(
    HeroSingle
);

export default HeroSingleContainer;
