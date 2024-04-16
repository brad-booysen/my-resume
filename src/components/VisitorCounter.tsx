// @ts-expect-error - no typings/types for the package
import RetroHitCounter from 'react-retro-hit-counter'

function VisitorCounter(props: { hits: number }) {

    return (
        <RetroHitCounter
            hits={props.hits}
            withBorder={true}
            withGlow={false}
            minLength={4}
            size={40}
            padding={4}
            digitSpacing={3}
            segmentThickness={4}
            segmentSpacing={0.5}
            segmentActiveColor="#76FF03"
            segmentInactiveColor="#315324"
            backgroundColor="#222222"
            borderThickness={7}
            glowStrength={0.5}
        />
    )

}

export default VisitorCounter