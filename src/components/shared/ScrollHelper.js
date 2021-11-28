import React, { useEffect, useRef, useCallback } from 'react';
import { useSelector } from 'react-redux';

import debounce from 'helpers/debounce';

export default function ScrollHelper(props) {
	const { beforeOnScreen, onScreen, timeDebounce } = props;
	const { uiLoadingAllProducts: { isLoading } } = useSelector(state => state.ui);
	const ref = useRef(null);

	const debounceScroll	=	debounce(function() {
		try {
			if (window.innerHeight - ref.current.getBoundingClientRect().top + beforeOnScreen > 0) {
				onScreen();
		  }
		} catch (e) {
			console.log(e);
		}
		}, timeDebounce);

	useEffect(() => {

  	window.addEventListener('scroll', debounceScroll);
  	return () => {
  		window.removeEventListener('scroll', debounceScroll);
  	}
	}, [debounceScroll]);


	return (
		<div ref={ref}>
		</div>
	);
}
