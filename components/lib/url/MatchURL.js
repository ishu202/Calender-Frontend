import { compact , map , filter , head , split } from "lodash";

const MatchURL = ( matchMap, defaultMatch ) => {
	let addr = compact( split( window.location.href, "/" ) );

	let matches = compact( Object.entries( matchMap )
		.map(( [ search, result ] ) => {
			let matches = addr.reduce(( matches, segment ) => {
				if ( new RegExp( search ).test( segment ) ) return true;
				return matches;
			}, false);

			return ( matches ) ? result : null;
		}));

	return ( matches.length ) ? matches[0] : defaultMatch;
}

export default MatchURL;
