import styles from 'components/map/maps.module.css'
import { MapsProps } from 'components/map/maps.props'
import { Map, Placemark, YMaps, ZoomControl } from 'react-yandex-maps'

const Maps = ({ loc }: MapsProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <YMaps style={{ width: '100%' }}>
        <Map width={'100%'} height={'500px'}
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
