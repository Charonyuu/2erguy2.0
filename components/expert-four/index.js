import React from 'react'
import useWindowSize from '@/utils/windowSize'
import DesktopExpertFour from './desktopExpertFour';
import MobileExpertFour from './mobileExpertFour';
export default function ExpertFour() {
    const {width} = useWindowSize()

    if (width > 768) return <DesktopExpertFour />;
    return(
        <MobileExpertFour/>
    )
}
