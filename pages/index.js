import React, { useEffect, useState } from 'react'
const anime = require('animejs/lib/anime.js')

import SVG from './svg/svg'

const Home = () => {
  const [long, setLong] = useState(true)
  const data = [
    {
      id: 1,
      content: 'This is Card',
    },
    {
      id: 2,
      content: 'This is Card',
    },
    {
      id: 3,
      content: 'This is Card',
    },
    {
      id: 4,
      content: 'This is Card',
    },
    {
      id: 5,
      content: 'This is Card',
    },
    {
      id: 6,
      content: 'This is Card',
    },
    {
      id: 7,
      content: 'This is Card',
    },
    {
      id: 8,
      content: 'This is Card',
    },
    {
      id: 9,
      content: 'This is Card',
    },
    {
      id: 10,
      content: 'This is Card',
    },
    {
      id: 11,
      content: 'This is Card',
    },
    {
      id: 12,
      content: 'This is Card',
    },
    {
      id: 13,
      content: 'This is Card',
    },
    {
      id: 14,
      content: 'This is Card',
    },
    {
      id: 15,
      content: 'This is Card',
    },
  ]

  const animateStagger = () => {
    anime({
      targets: '.card',
      opacity: [0, 1],
      scale: [0.8, 1],
      delay: anime.stagger(400),
      easing: 'spring(1, 80, 10, 0)',
      duration: 1000,
      loop: true,
      direction: 'alternate',
    })
  }

  const animateTimeline = () => {
    let timeline = anime.timeline({
      easing: 'spring(1, 80, 10, 0)',
      duration: 500,
      loop: true,
      direction: 'alternate',
    })
    timeline
      .add({
        targets: '.rectangle',
        translateX: 400,
      })
      .add({
        targets: '.circle',
        translateX: 250,
      })
      .add({
        targets: '.square',
        translateX: 250,
      })
  }

  const animateProduct = (direction) => {
    if (direction === 'in') {
      anime({
        targets: '.ban',
        translateY: 50,
        scale: 10,
        easing: 'spring(1, 80, 10, 0)',
        duration: 500,
      })
      anime({
        targets: '.ban h5',
        opacity: 0,
        easing: 'spring(1, 80, 10, 0)',
        duration: 500,
      })
      anime({
        targets: '.buy button',
        scale: 1,
        opacity: 1,
        easing: 'spring(1, 80, 10, 0)',
        duration: 100,
      })
    } else {
      anime({
        targets: '.ban',
        translateY: 0,
        scale: 1,
        easing: 'spring(1, 80, 10, 0)',
        duration: 500,
      })
      anime({
        targets: '.ban h5',
        opacity: 1,
        easing: 'spring',
        duration: 500,
      })
      anime({
        targets: '.buy button',
        scale: 0.9,
        opacity: 0,
        easing: 'spring',
        duration: 100,
      })
    }
  }

  const actionExpand = () => {
    if (long) {
      anime({
        targets: '.box.action1',
        width: '40.000em',
        easing: 'spring(1, 80, 10, 0)',
        duration: 1500,
      })
      setLong(false)
    } else {
      anime({
        targets: '.box.action1',
        width: '20.000em',
        easing: 'spring(1, 80, 10, 0)',
        duration: 1500,
      })
      setLong(true)
    }
  }

  const actionAlert = () => {
    anime({
      targets: '.alert',
      opacity: 1,
      right: '4.000em',
      duration: 3000,
    })
    setTimeout(() => {
      anime({
        targets: '.alert',
        opacity: 0,
        right: '-8.000em',
        duration: 3000,
      })
    }, 4000)
  }

  const animateSVGPath = () => {
    anime({
      targets: '.sipp path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutQuad',
      duration: 8000,
      direction: 'alternate',
      loop: true,
    })
  }

  useEffect(() => {
    animateStagger()
    animateTimeline()
    animateSVGPath()
  }, [])

  return (
    <div className={'app'}>
      <div className={'descriptive'} page={'index'}>
        <div className={'descriptive'} section={'title'}>
          <h1>animeJS</h1>
        </div>
        <div className={'descriptive'} section={'subtitle'}>
          <h3>Stagger</h3>
        </div>
        <div className={'descriptive'} section={'cards'}>
          {data.map((card) => (
            <div className={'card'} key={card.id}>
              <h1>Card {card.id}</h1>
              <p>{card.content}</p>
            </div>
          ))}
        </div>
        <div className={'descriptive'} section={'subtitle'}>
          <h3>Timeline</h3>
        </div>
        <div className={'descriptive'} section={'shapes'}>
          <div className={'rectangle'} />
          <div className={'circle'} />
          <div className={'square'} />
        </div>
        <div className={'descriptive'} section={'subtitle'}>
          <h3>Actions - with state</h3>
        </div>
        <div className={'descriptive'} section={'actions'}>
          <div className={'action'}>
            <button onClick={() => actionExpand(long)}>
              Click to {long ? 'expand' : 'shrink'}
            </button>
            <div className={'box action1'}></div>
          </div>
          <div className={'action'}>
            <button onClick={() => actionAlert()}>Show alert</button>
            <div className={'alert'}>
              <h3>Looks like you've seen me now !</h3>
            </div>
          </div>
          <div className={'action'}>
            <div className={'products'}>
              <div
                className={'product'}
                onMouseEnter={() => animateProduct('in')}
                onMouseLeave={() => animateProduct('out')}
              >
                <h1 className={'title'}>Let's have a caffee!</h1>
                <div className={'visual'}>
                  <img src={'https://bit.ly/3brk1t1'} />
                </div>
                <div className={'text'}>
                  <h1>Kopi Tubruk Dalgona</h1>
                  <p>
                    The best coffee with great taste and aesthetic and also
                    corona in its each drop.
                  </p>
                </div>
                <div className={'splat'}>
                  <div className={'ban'}>
                    <h5>Try!</h5>
                  </div>
                </div>
                <div className={'buy'}>
                  <button>Buy Now !</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={'descriptive'} section={'svgs'}>
          <div className={'svg'}>
            <SVG />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
