import styles from './BenefitVideo.module.scss'

import imgVideo from './Photo.jpg'

import pathVideo from './videoOne.mp4'


import { useRef, useState } from 'react'
import PlayButton from '../../../../ui/play_button/PlayButton'

const BenefitVideo = () => {
	const [isPlaying, setIsPlaying] = useState(false)

	const videoRef = useRef(null)

	const handlerPlay = () => {
		setIsPlaying(true)
		videoRef.current.play()
	}

	return (
		<div className={styles.wrapper}>
			<div className='container'>
				<div className={styles.content}>
					<div className={styles.videos}>
						<video
							className={styles.video}
							src={pathVideo}
							width={618}
							height={361}
							poster={imgVideo}
							ref={videoRef}
							onPlay={() => setIsPlaying(true)}
							onPause={() => setIsPlaying(false)}
						></video>
						{!isPlaying && (
							<div className={styles.playButton} onClick={handlerPlay}>
								<PlayButton />
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
export default BenefitVideo
