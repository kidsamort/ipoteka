import styles from 'components/map/maps.module.css'
import { MapsProps } from 'components/map/maps.props'
import { Map, Placemark, YMaps, ZoomControl } from 'react-yandex-maps'
import { useEffect, useState } from 'react'

const Maps = ({ loc }: MapsProps): JSX.Element => {
  const [width, setWidth] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)

  useEffect(() => {
    setHeight(window.innerHeight)
  }, [])
  return (
    <div className={styles.wrapper}>
      <YMaps style={{ width: '100%' }}>
        <Map width={'100%'} height={`${height / 2}px`}
             instanceRef={ref => { // @ts-ignore
               ref && ref.behaviors.disable('scrollZoom')
             }}
             defaultState={{ center: loc as unknown as number[], zoom: 12 }}>
          <ZoomControl />
          <Placemark geometry={loc as unknown as number[]} />
        </Map>
      </YMaps>
    </div>
  )
}

export default Maps
