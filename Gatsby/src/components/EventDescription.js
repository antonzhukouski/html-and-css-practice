import React from 'react'

class Eventdescription extends React.Component {
    render() {
        return (
            <div className = 'description'>
                <div className = 'description__head'>
                    Minsk.rb Beer Up!
                </div>
                <div className = 'description__date'>
                    28 Sep 2017
                </div>
                <div className = 'description__text'>
                    Synth polaroid bitters chillwave pickled. Vegan disrupt tousled. Portland keffiyeh aesthetic food sriracha cornhole single-origin coffee church-key roof party. Leggings McSweeney's, normcore you probably haven't heard of them Marfa organic squid. Slow-carb 90's ennui Gobard pug asymmetrical, narwhal VHS Tonx High Life. Retro synth Gobard picked Elsy jean shorts beard, pour-over fanny pack mumblecore.
                </div>
                <div className = 'description__mediapartners'>
                    <div className = 'description__mediapartners__event'>
                        MEdIA PARTNERS
                    </div>
                    <div className = 'description__mediapartners__list'>
                        <p> <a href = 'https://rubyroidlabs.com'> Rubyroid Labs </a> </p>
                        <p> <a href = 'https://datarockets.com'> datarockets </a> </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Eventdescription;
