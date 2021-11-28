import React, { useEffect, useRef, useCallback } from 'react';

import debounce from 'helpers/debounce';

export default function ScrollHelper(props) {
	const { beforeOnScreen, onScreen, timeDebounce } = props;
	const ref = useRef(null);

	const debounceScroll = useCallback(debounce(function() {
		if (window.innerHeight - ref.current.getBoundingClientRect().top + beforeOnScreen > 0) {
			onScreen();
	  }
	}, timeDebounce), [onScreen]);

	useEffect(() => {

  	window.addEventListener('scroll', debounceScroll);
  	return () => {
  		window.removeEventListener('scroll', debounceScroll);
  	}
	}, []);


	return (
		<div ref={ref}>
		</div>
	);
}
